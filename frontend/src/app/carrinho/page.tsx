import type { Metadata } from "next";
import { Carrinho } from "@/components/carrinho/Carrinho";

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Revise as peças escolhidas antes de finalizar sua compra.",
};

export default function PaginaCarrinho() {
  return <Carrinho />;
}
