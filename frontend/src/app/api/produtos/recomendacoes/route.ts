// Fake API: GET /produtos/recomendacoes (ContratoDeAPI.md, 2.10)
import { simular } from "@/lib/fake-api";
import { recomendarPara } from "@/mocks";

export async function GET(request: Request) {
  const falha = await simular(request);
  if (falha) return falha;

  const produtoId = new URL(request.url).searchParams.get("produtoId");
  return Response.json({ recomendados: recomendarPara(produtoId) });
}
