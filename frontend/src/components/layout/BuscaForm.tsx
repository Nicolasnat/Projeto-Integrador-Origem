"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

// Busca do header. Leva ao catálogo com o termo na URL.
export function BuscaForm({
  id,
  aoBuscar,
}: {
  id: string;
  aoBuscar?: () => void;
}) {
  const router = useRouter();

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const termo = String(new FormData(evento.currentTarget).get("termo") ?? "");
    const busca = termo.trim()
      ? `?termo=${encodeURIComponent(termo.trim())}`
      : "";
    router.push(`/catalogo${busca}`);
    aoBuscar?.();
  }

  return (
    <form role="search" onSubmit={enviar} className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Buscar peças, técnicas ou artesãos
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-tinta-3"
        aria-hidden="true"
      />
      <input
        id={id}
        name="termo"
        type="search"
        placeholder="Busque peças, artesãos..."
        className="h-10 w-full rounded-raio border border-borda bg-fundo pl-10 pr-3 text-apoio text-tinta placeholder:text-tinta-4 hover:border-borda-forte"
      />
    </form>
  );
}
