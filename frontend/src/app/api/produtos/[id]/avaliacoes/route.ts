// Fake API: GET /produtos/{id}/avaliacoes (lacuna do contrato)
import { erroJson, simular } from "@/lib/fake-api";
import { avaliacoesDe, buscarProduto } from "@/mocks";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const falha = await simular(request);
  if (falha) return falha;

  const { id } = await params;
  if (!buscarProduto(id)) return erroJson(404, "Não encontramos essa peça.");

  return Response.json(avaliacoesDe(id));
}
