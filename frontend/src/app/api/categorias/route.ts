// Fake API: GET /categorias (lacuna do contrato)
import { simular } from "@/lib/fake-api";
import { categorias } from "@/mocks";

export async function GET(request: Request) {
  const falha = await simular(request);
  if (falha) return falha;

  return Response.json(categorias);
}
