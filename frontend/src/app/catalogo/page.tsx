import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalogo } from "@/components/catalogo/Catalogo";
import { Container } from "@/components/layout/Container";
import { ProdutoGradeEsqueleto } from "@/components/produto/ProdutoGrade";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Busque peças de artesanato, literatura e arte de Pernambuco por técnica, região, categoria e preço.",
};

// useSearchParams exige Suspense (docs do Next 16, use-search-params).
export default function PaginaCatalogo() {
  return (
    <Suspense
      fallback={
        <Container className="py-secao">
          <ProdutoGradeEsqueleto quantidade={8} />
        </Container>
      }
    >
      <Catalogo />
    </Suspense>
  );
}
