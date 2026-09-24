import type { ComponentProps } from "react";

type Opcao = { id: string; nome: string };

type SelecaoProps = Omit<ComponentProps<"select">, "id" | "className"> & {
  id: string;
  rotulo: string;
  opcoes: Opcao[];
  vazio?: string;
  erro?: string;
  // Em filtro não há validação: dispensa o espaço reservado da mensagem.
  compacto?: boolean;
};

export function Selecao({
  id,
  rotulo,
  opcoes,
  vazio,
  erro,
  compacto = false,
  ...resto
}: SelecaoProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-apoio font-bold text-tinta">
        {rotulo}
      </label>
      <select
        id={id}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`h-11 w-full rounded-raio border bg-superficie px-3 text-corpo text-tinta disabled:opacity-60 ${
          erro ? "border-erro" : "border-borda hover:border-borda-forte"
        }`}
        {...resto}
      >
        {vazio !== undefined && <option value="">{vazio}</option>}
        {opcoes.map((opcao) => (
          <option key={opcao.id} value={opcao.id}>
            {opcao.nome}
          </option>
        ))}
      </select>
      {!compacto && (
        <p id={`${id}-erro`} className="min-h-5 text-apoio text-erro">
          {erro}
        </p>
      )}
    </div>
  );
}
