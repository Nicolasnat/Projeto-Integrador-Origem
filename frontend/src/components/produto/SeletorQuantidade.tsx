import { Minus, Plus } from "lucide-react";

const BOTAO =
  "inline-flex size-11 items-center justify-center text-tinta transition-colors duration-150 hover:bg-superficie-2 disabled:cursor-not-allowed disabled:opacity-40";

export function SeletorQuantidade({
  valor,
  maximo,
  aoMudar,
  desabilitado = false,
}: {
  valor: number;
  maximo: number;
  aoMudar: (valor: number) => void;
  desabilitado?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label="Quantidade"
      className="inline-flex h-11 items-center overflow-hidden rounded-raio border border-borda"
    >
      <button
        type="button"
        className={BOTAO}
        onClick={() => aoMudar(valor - 1)}
        disabled={desabilitado || valor <= 1}
        aria-label="Diminuir quantidade"
      >
        <Minus className="size-4" aria-hidden="true" />
      </button>
      <output
        aria-live="polite"
        className="min-w-8 text-center text-apoio font-bold tabular-nums text-tinta"
      >
        {valor}
      </output>
      <button
        type="button"
        className={BOTAO}
        onClick={() => aoMudar(valor + 1)}
        disabled={desabilitado || valor >= maximo}
        aria-label="Aumentar quantidade"
      >
        <Plus className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
