import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BotaoLink } from "@/components/ui/Botao";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NaoEncontrada() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="font-titulo text-h1 font-bold text-tinta">
        Esta página não existe
      </h1>
      <p className="max-w-md text-corpo text-tinta-2">
        O endereço pode ter mudado, ou a tela ainda não foi construída. A
        vitrine continua aberta.
      </p>
      <BotaoLink href="/">Voltar para a vitrine</BotaoLink>
    </Container>
  );
}
