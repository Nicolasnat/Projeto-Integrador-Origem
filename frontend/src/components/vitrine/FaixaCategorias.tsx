"use client";

import { Anvil, BookOpen, Palette, Tag, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Esqueleto } from "@/components/ui/Esqueleto";
import { useCategorias } from "@/hooks/useCatalogo";

// Ícone por id de categoria. Categoria nova sem ícone cai no Tag.
const ICONES: Record<string, LucideIcon> = {
  artesanato: Anvil,
  literatura: BookOpen,
  "arte-e-decoracao": Palette,
};

export function FaixaCategorias() {
  const { dados, carregando, erro } = useCategorias();

  // Sem categorias a faixa some: o header e a busca seguem levando ao catálogo.
  if (erro || (dados && dados.length === 0)) return null;

  return (
    <nav
      aria-label="Comprar por categoria"
      className="border-y border-borda bg-superficie"
    >
      <ul className="mx-auto flex w-full max-w-pagina snap-x gap-2 overflow-x-auto px-margem py-4 md:justify-center md:gap-12">
        {carregando &&
          [0, 1, 2].map((i) => (
            <li key={i} className="flex flex-col items-center gap-2 px-4">
              <Esqueleto className="size-6" />
              <Esqueleto className="h-4 w-20" />
            </li>
          ))}
        {dados?.map((categoria) => {
          const Icone = ICONES[categoria.id] ?? Tag;
          return (
            <li key={categoria.id} className="shrink-0 snap-start">
              <Link
                href={`/catalogo?categoria=${categoria.id}`}
                className="flex min-w-24 flex-col items-center gap-2 rounded-raio px-4 py-2 text-apoio font-medium text-tinta transition-colors duration-150 hover:bg-superficie-2"
              >
                <Icone className="size-6 text-terracota" aria-hidden="true" />
                {categoria.nome}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
