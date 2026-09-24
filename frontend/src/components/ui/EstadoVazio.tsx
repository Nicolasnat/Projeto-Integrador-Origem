import { PackageOpen } from "lucide-react";
import type { ReactNode } from "react";

export function EstadoVazio({
  titulo,
  descricao,
  acao,
}: {
  titulo: string;
  descricao: string;
  acao?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-raio border border-dashed border-borda-forte px-6 py-10 text-center">
      <PackageOpen className="size-8 text-tinta-3" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <p className="font-titulo text-h3 font-bold text-tinta">{titulo}</p>
        <p className="text-apoio text-tinta-2">{descricao}</p>
      </div>
      {acao}
    </div>
  );
}
