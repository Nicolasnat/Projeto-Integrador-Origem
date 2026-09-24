import type { ComponentProps } from "react";

type CampoProps = Omit<ComponentProps<"input">, "id" | "className"> & {
  id: string;
  rotulo: string;
  erro?: string;
  dica?: string;
};

export function Campo({ id, rotulo, erro, dica, ...resto }: CampoProps) {
  const descricao = erro ? `${id}-erro` : dica ? `${id}-dica` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-apoio font-bold text-tinta">
        {rotulo}
      </label>
      <input
        id={id}
        aria-invalid={erro ? true : undefined}
        aria-describedby={descricao}
        className={`h-11 w-full rounded-raio border bg-superficie px-3 text-corpo text-tinta placeholder:text-tinta-4 ${
          erro ? "border-erro" : "border-borda hover:border-borda-forte"
        }`}
        {...resto}
      />
      {/* O espaço da mensagem fica reservado: sem isso o botão abaixo se mexe no blur e o clique se perde. */}
      <p
        id={descricao}
        className={`min-h-5 text-apoio ${erro ? "text-erro" : "text-tinta-3"}`}
      >
        {erro ?? dica}
      </p>
    </div>
  );
}
