// Fake API: o pagamento é simulado no navegador, sem guardar dados de cartão.
// Avaliação 2: trocar o miolo por http("/pagamentos") mantendo a assinatura.
import { gravarLocal, lerLocal } from "@/lib/armazenamento";
import { ApiError } from "@/lib/http";
import type {
  DadosPagamento,
  PagamentoProcessado,
  PedidoResumo,
} from "@/types";

const CHAVE_PEDIDOS = "pedidos";
const ATRASO_MS = 700;

function esperar(): Promise<void> {
  return new Promise((resolver) => setTimeout(resolver, ATRASO_MS));
}

export const pagamentosService = {
  // POST /pagamentos
  async processar(dados: DadosPagamento): Promise<PagamentoProcessado> {
    await esperar();

    const pedidos = lerLocal<PedidoResumo[]>(CHAVE_PEDIDOS) ?? [];
    const pedido = pedidos.find((item) => item.id === dados.pedidoId);
    if (!pedido) throw new ApiError(404, "Pedido não encontrado.");
    if (
      dados.metodoPagamento === "CARTAO_CREDITO" &&
      !dados.tokenCartao
    ) {
      throw new ApiError(400, "Confira os dados do cartão.");
    }

    gravarLocal(
      CHAVE_PEDIDOS,
      pedidos.map((item) =>
        item.id === dados.pedidoId ? { ...item, status: "PAGO" } : item,
      ),
    );

    return {
      transacaoId: `trx_${Date.now().toString().slice(-9)}`,
      status: "APROVADO",
      dataPagamento: new Date().toISOString(),
    };
  },
};
