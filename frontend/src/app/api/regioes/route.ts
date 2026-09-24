// Fake API: GET /regioes (lacuna do contrato)
import { simular } from "@/lib/fake-api";
import { regioes } from "@/mocks";

export async function GET(request: Request) {
  const falha = await simular(request);
  if (falha) return falha;

  return Response.json(regioes);
}
