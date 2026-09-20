import type { Metadata } from "next";
import { HistoricoCompras } from "@/components/conta/HistoricoCompras";

export const metadata: Metadata = {
  title: "Compras realizadas",
  description: "Acompanhe seus pedidos e reveja suas compras na Origem.",
};

export default function PaginaConta() {
  return <HistoricoCompras />;
}
