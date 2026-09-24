// Fake API: GET /artesaos/{id}/perfil (ContratoDeAPI.md, 2.5)
import { erroJson, simular } from "@/lib/fake-api";
import { perfilDoArtesao } from "@/mocks";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const falha = await simular(request);
  if (falha) return falha;

  const { id } = await params;
  const perfil = perfilDoArtesao(id);
  if (!perfil) return erroJson(404, "Não encontramos esse artesão.");

  return Response.json(perfil);
}
