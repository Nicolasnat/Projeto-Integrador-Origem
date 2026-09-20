import { http } from "@/lib/http";
import type {
  FiltrosProdutos,
  Paginado,
  ProdutoDetalhe,
  ProdutoResumo,
  RespostaAvaliacoes,
  RespostaRecomendacoes,
} from "@/types";

export const produtosService = {
  listar(filtros: FiltrosProdutos, sinal?: AbortSignal) {
    return http<Paginado<ProdutoResumo>>("/produtos", {
      parametros: filtros,
      sinal,
    });
  },

  listarDestaques(sinal?: AbortSignal) {
    return http<Paginado<ProdutoResumo>>("/produtos", {
      parametros: { destaque: true },
      sinal,
    });
  },

  buscar(id: string, sinal?: AbortSignal) {
    return http<ProdutoDetalhe>(`/produtos/${encodeURIComponent(id)}`, {
      sinal,
    });
  },

  recomendados(produtoId: string, sinal?: AbortSignal) {
    return http<RespostaRecomendacoes>("/produtos/recomendacoes", {
      parametros: { produtoId },
      sinal,
    });
  },

  avaliacoes(id: string, sinal?: AbortSignal) {
    return http<RespostaAvaliacoes>(
      `/produtos/${encodeURIComponent(id)}/avaliacoes`,
      { sinal },
    );
  },
};
