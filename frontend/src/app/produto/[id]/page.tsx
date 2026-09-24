import type { Metadata } from "next";
import { DetalheProduto } from "@/components/produto/DetalheProduto";

// O título com o nome da peça é definido no cliente, quando o dado chega.
export const metadata: Metadata = { title: "Peça" };

export default async function PaginaProduto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DetalheProduto id={id} />;
}
