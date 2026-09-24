import type { Metadata } from "next";
import { DetalhePedido } from "@/components/conta/DetalhePedido";

export const metadata: Metadata = {
  title: "Acompanhamento de pedido",
  description: "Acompanhe os detalhes da sua compra na Origem.",
};

export default async function PaginaPedido({
  params,
}: PageProps<"/conta/pedidos/[id]">) {
  const { id } = await params;
  return <DetalhePedido id={id} />;
}
