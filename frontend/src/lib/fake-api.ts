// Helper das rotas da Fake API (src/app/api). Some junto com elas na Avaliação 2.

const ATRASO_MS = 400;

export function erroJson(status: number, mensagem: string): Response {
  return Response.json({ mensagem }, { status });
}

// Aplica o atraso e, se a URL tiver ?_erro=500, devolve a falha pedida.
export async function simular(request: Request): Promise<Response | null> {
  await new Promise((resolver) => setTimeout(resolver, ATRASO_MS));

  const erro = new URL(request.url).searchParams.get("_erro");
  if (!erro) return null;

  const status = Number(erro);
  return erroJson(
    status >= 400 && status <= 599 ? status : 500,
    "Não foi possível carregar agora. Tente de novo em instantes.",
  );
}
