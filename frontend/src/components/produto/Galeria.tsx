"use client";

import Image from "next/image";
import { useState } from "react";

export function Galeria({ imagens, nome }: { imagens: string[]; nome: string }) {
  const [atual, setAtual] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row">
      {imagens.length > 1 && (
        <ul className="flex gap-2 md:flex-col">
          {imagens.map((imagem, indice) => (
            <li key={`${imagem}-${indice}`}>
              <button
                type="button"
                onClick={() => setAtual(indice)}
                aria-label={`Ver foto ${indice + 1} de ${imagens.length}`}
                aria-pressed={indice === atual}
                className={`relative block size-20 overflow-hidden rounded-raio border-2 transition-colors duration-150 ${
                  indice === atual
                    ? "border-terracota"
                    : "border-superficie-2 hover:border-borda-forte"
                }`}
              >
                <Image
                  src={imagem}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="relative aspect-4/3 w-full overflow-hidden rounded-raio border border-superficie-2 bg-superficie-2">
        <Image
          src={imagens[atual]}
          alt={`${nome}, foto ${atual + 1} de ${imagens.length}`}
          fill
          priority
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
