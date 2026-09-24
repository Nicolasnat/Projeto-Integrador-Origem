import { ChevronLeft, ChevronRight } from "lucide-react";

const BOTAO =
  "inline-flex size-10 items-center justify-center rounded-raio text-apoio tabular-nums transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40";

// Sempre mostra a primeira, a última e as vizinhas da atual.
function paginasVisiveis(atual: number, total: number): (number | "lacuna")[] {
  const visiveis: (number | "lacuna")[] = [];
  for (let pagina = 1; pagina <= total; pagina++) {
    const perto = Math.abs(pagina - atual) <= 1;
    if (pagina === 1 || pagina === total || perto) visiveis.push(pagina);
    else if (visiveis[visiveis.length - 1] !== "lacuna") visiveis.push("lacuna");
  }
  return visiveis;
}

export function Paginacao({
  pagina,
  totalPaginas,
  aoMudar,
}: {
  pagina: number;
  totalPaginas: number;
  aoMudar: (pagina: number) => void;
}) {
  if (totalPaginas <= 1) return null;

  return (
    <nav aria-label="Páginas do catálogo" className="flex justify-center">
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            className={`${BOTAO} text-terracota hover:bg-superficie-2`}
            onClick={() => aoMudar(pagina - 1)}
            disabled={pagina <= 1}
            aria-label="Página anterior"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
        </li>
        {paginasVisiveis(pagina, totalPaginas).map((item, indice) =>
          item === "lacuna" ? (
            <li key={`lacuna-${indice}`} aria-hidden="true" className="px-1">
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => aoMudar(item)}
                aria-current={item === pagina ? "page" : undefined}
                aria-label={`Página ${item}`}
                className={`${BOTAO} ${
                  item === pagina
                    ? "bg-terracota font-bold text-white"
                    : "bg-superficie text-tinta hover:bg-superficie-2"
                }`}
              >
                {item}
              </button>
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            className={`${BOTAO} text-terracota hover:bg-superficie-2`}
            onClick={() => aoMudar(pagina + 1)}
            disabled={pagina >= totalPaginas}
            aria-label="Próxima página"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
