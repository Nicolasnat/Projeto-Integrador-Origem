import { Star } from "lucide-react";
import { formatarNota } from "@/lib/formato";

export function Estrelas({ nota }: { nota: number }) {
  const cheias = Math.round(nota);

  return (
    <span
      role="img"
      aria-label={`Nota ${formatarNota(nota)} de 5`}
      className="inline-flex items-center gap-0.5"
    >
      {[1, 2, 3, 4, 5].map((posicao) => (
        <Star
          key={posicao}
          aria-hidden="true"
          className={`size-4 ${
            posicao <= cheias
              ? "fill-aviso text-aviso"
              : "fill-transparent text-borda-forte"
          }`}
        />
      ))}
    </span>
  );
}
