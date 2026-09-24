"use client";

import { useCallback, useEffect, useEffectEvent, useState } from "react";
import { ApiError } from "@/lib/http";

type Resultado<T> = {
  chave: string;
  dados: T | null;
  erro: ApiError | null;
};

export type Consulta<T> = {
  dados: T | null;
  carregando: boolean;
  erro: ApiError | null;
  recarregar: () => void;
};

// Base de todo hook de leitura. A chave identifica a consulta: mudou a chave, busca de novo.
export function useConsulta<T>(
  chave: string,
  buscar: (sinal: AbortSignal) => Promise<T>,
): Consulta<T> {
  const [tentativa, setTentativa] = useState(0);
  const [resultado, setResultado] = useState<Resultado<T> | null>(null);

  const chaveAtual = `${chave}#${tentativa}`;
  const executar = useEffectEvent(buscar);

  useEffect(() => {
    const controle = new AbortController();

    executar(controle.signal)
      .then((dados) => setResultado({ chave: chaveAtual, dados, erro: null }))
      .catch((causa: unknown) => {
        if (controle.signal.aborted) return;
        const erro =
          causa instanceof ApiError
            ? causa
            : new ApiError(0, "Algo deu errado. Tente de novo em instantes.");
        setResultado({ chave: chaveAtual, dados: null, erro });
      });

    return () => controle.abort();
  }, [chaveAtual]);

  const recarregar = useCallback(() => setTentativa((n) => n + 1), []);

  const atual = resultado?.chave === chaveAtual ? resultado : null;
  return {
    dados: atual?.dados ?? null,
    carregando: atual === null,
    erro: atual?.erro ?? null,
    recarregar,
  };
}
