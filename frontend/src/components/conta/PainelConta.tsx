import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

// Moldura de Login e Cadastro: formulário à esquerda, foto à direita a partir de lg.
export function PainelConta({
  titulo,
  descricao,
  children,
}: {
  titulo: string;
  descricao: string;
  children: ReactNode;
}) {
  return (
    <Container className="grid flex-1 items-start gap-10 py-secao lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:gap-16">
      <section
        aria-labelledby="conta-titulo"
        className="flex flex-col gap-6 rounded-painel border border-superficie-2 bg-superficie p-6 shadow-card sm:p-10"
      >
        <div className="flex flex-col gap-2">
          <h1
            id="conta-titulo"
            className="font-titulo text-h1 font-bold text-tinta"
          >
            {titulo}
          </h1>
          <p className="text-corpo text-tinta-2">{descricao}</p>
        </div>
        {children}
      </section>

      <div className="relative hidden min-h-120 self-stretch overflow-hidden rounded-painel border border-superficie-2 lg:block">
        <Image
          src="/produtos/passaro-madeira.jpg"
          alt="Pássaro de madeira entalhado e pintado à mão"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 0px"
          className="object-cover"
        />
      </div>
    </Container>
  );
}
