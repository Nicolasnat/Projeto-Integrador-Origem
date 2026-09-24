// Fake API: GET /produtos/{id} (ContratoDeAPI.md, 2.4)
import { erroJson, simular } from "@/lib/fake-api";
import { buscarProduto } from "@/mocks";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const falha = await simular(request);
  if (falha) return falha;

  const { id } = await params;
  const produto = buscarProduto(id);
  if (!produto) return erroJson(404, "Não encontramos essa peça.");

  return Response.json(produto);
}
