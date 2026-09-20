// Fake API: pedidos no localStorage, pelo mesmo motivo do carrinho.
// Assinatura do backend: ContratoDeAPI.md, 2.6 e 2.7.
import { gravarLocal, lerLocal } from "@/lib/armazenamento";
import { ApiError } from "@/lib/http";
import { carrinhoService } from "@/services/carrinho";
import type {
  EnderecoEntrega,
  OpcaoEnvio,
  PedidoCriado,
  PedidoResumo,
  RespostaPedidos,
} from "@/types";

const CHAVE = "pedidos";
const ENVIO_PADRAO: OpcaoEnvio = {
  id: "economico",
  nome: "Econômico",
  prazo: "7 a 10 dias úteis",
  valor: 18,
};

export const pedidosService = {
  opcaoEnvioPadrao(): OpcaoEnvio {
    return ENVIO_PADRAO;
  },

  // POST /pedidos/checkout
  async checkout(endereco: EnderecoEntrega): Promise<PedidoCriado> {
    const carrinho = await carrinhoService.obter();
    if (carrinho.itens.length === 0) {
      throw new ApiError(400, "Seu carrinho está vazio.");
    }
    if (!endereco.cep || !endereco.rua || !endereco.numero) {
      throw new ApiError(400, "Preencha o endereço de entrega.");
    }

    const pedido: PedidoResumo = {
      id: `ped_${Date.now().toString().slice(-6)}`,
      status: "AGUARDANDO_PAGAMENTO",
      valorTotal: carrinho.valorTotal + ENVIO_PADRAO.valor,
      criadoEm: new Date().toISOString(),
      itens: carrinho.itens,
    };
    gravarLocal(CHAVE, [pedido, ...(lerLocal<PedidoResumo[]>(CHAVE) ?? [])]);
    return {
      pedidoId: pedido.id,
      status: pedido.status,
      valorTotal: pedido.valorTotal,
    };
  },

  // GET /comprador/pedidos
  async listar(): Promise<RespostaPedidos> {
    return {
      pedidos: (lerLocal<PedidoResumo[]>(CHAVE) ?? []).map((pedido) => ({
        ...pedido,
        itens: pedido.itens ?? [],
      })),
    };
  },
};
