import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="mt-auto bg-tinta text-superficie">
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-titulo text-h3 font-bold">Origem</p>
          <p className="text-apoio text-borda">
            Artesanato, literatura e arte de Pernambuco, direto de quem faz.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-apoio">
            <li>
              <Link href="/catalogo" className="hover:underline">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/suporte" className="hover:underline">
                Ajuda
              </Link>
            </li>
            <li>
              <Link href="/entrar" className="hover:underline">
                Entrar
              </Link>
            </li>
            <li>
              <Link href="/cadastro" className="hover:underline">
                Criar conta
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-tinta-2">
        <Container className="py-4">
          <p className="text-legenda text-borda">
            © 2026 Origem · Projeto Integrador de ADS · CESAR School
          </p>
        </Container>
      </div>
    </footer>
  );
}
