// Fake API: GET /produtos (ContratoDeAPI.md, 2.4)
import { simular } from "@/lib/fake-api";
import { listarDestaques, listarProdutos } from "@/mocks";
import type { OrdenacaoProdutos } from "@/types";

export async function GET(request: Request) {
  const falha = await simular(request);
  if (falha) return falha;

  const p = new URL(request.url).searchParams;
  const numero = (chave: string) =>
    p.has(chave) && p.get(chave) !== "" ? Number(p.get(chave)) : undefined;

  if (p.get("destaque") === "true") {
    const itens = listarDestaques();
    return Response.json({
      total: itens.length,
      pagina: 1,
      limite: itens.length,
      itens,
    });
  }

  return Response.json(
    listarProdutos({
      termo: p.get("termo") ?? undefined,
      categoria: p.get("categoria") ?? undefined,
      tecnica: p.get("tecnica") ?? undefined,
      regiao: p.get("regiao") ?? undefined,
      precoMax: numero("precoMax"),
      avaliacaoMin: numero("avaliacaoMin"),
      disponivel: p.get("disponivel") === "true",
      pecaUnica: p.get("pecaUnica") === "true",
      ordenar: (p.get("ordenar") as OrdenacaoProdutos | null) ?? undefined,
      pagina: numero("pagina"),
      limite: numero("limite"),
    }),
  );
}
