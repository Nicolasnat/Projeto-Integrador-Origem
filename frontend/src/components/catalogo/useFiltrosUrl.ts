"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { FiltrosProdutos, OrdenacaoProdutos } from "@/types";

const LIMITE = 8;
const CHAVES_DE_FILTRO = [
  "termo",
  "categoria",
  "tecnica",
  "regiao",
  "precoMax",
  "avaliacaoMin",
  "disponivel",
  "pecaUnica",
] as const;

// Busca e filtros moram na URL: o link pode ser compartilhado e o botão voltar funciona.
export function useFiltrosUrl() {
  const router = useRouter();
  const pathname = usePathname();
  const parametros = useSearchParams();

  const texto = (chave: string) => parametros.get(chave) ?? "";
  const numero = (chave: string) =>
    parametros.get(chave) ? Number(parametros.get(chave)) : undefined;

  const filtros: FiltrosProdutos = {
    termo: texto("termo") || undefined,
    categoria: texto("categoria") || undefined,
    tecnica: texto("tecnica") || undefined,
    regiao: texto("regiao") || undefined,
    precoMax: numero("precoMax"),
    avaliacaoMin: numero("avaliacaoMin"),
    disponivel: texto("disponivel") === "true" || undefined,
    pecaUnica: texto("pecaUnica") === "true" || undefined,
    ordenar: (texto("ordenar") as OrdenacaoProdutos) || undefined,
    pagina: numero("pagina") ?? 1,
    limite: LIMITE,
  };

  function atualizar(mudancas: Record<string, string | null>) {
    const novos = new URLSearchParams(parametros.toString());
    for (const [chave, valor] of Object.entries(mudancas)) {
      if (valor) novos.set(chave, valor);
      else novos.delete(chave);
    }
    // Mudou o filtro, volta para a primeira página.
    const mudouPagina = "pagina" in mudancas;
    if (!mudouPagina) novos.delete("pagina");

    const busca = novos.toString();
    router.push(busca ? `${pathname}?${busca}` : pathname, {
      scroll: mudouPagina,
    });
  }

  function limpar() {
    atualizar(Object.fromEntries(CHAVES_DE_FILTRO.map((chave) => [chave, null])));
  }

  const ativos = CHAVES_DE_FILTRO.filter((chave) => parametros.get(chave)).length;

  return { filtros, texto, atualizar, limpar, ativos };
}
