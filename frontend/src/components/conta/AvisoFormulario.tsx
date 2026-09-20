import { CircleAlert } from "lucide-react";

export function AvisoFormulario({ mensagem }: { mensagem: string }) {
  return (
    <p
      role="alert"
      className="flex items-start gap-2 rounded-raio border border-erro bg-erro/5 px-3 py-2 text-apoio text-erro"
    >
      <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {mensagem}
    </p>
  );
}
