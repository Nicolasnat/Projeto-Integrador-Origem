// Fake API: pedidos no localStorage, pelo mesmo motivo do carrinho.
// Assinatura do backend: ContratoDeAPI.md, 2.6 e 2.7.
import { gravarLocal, lerLocal } from "@/lib/armazenamento";
import { ApiError } from "@/lib/http";
import { carrinhoService } from "@/services/carrinho";
import type {
  EnderecoEntrega,
  PedidoCriado,
  PedidoResumo,
  RespostaPedidos,
} from "@/types";

const CHAVE = "pedidos";

export const pedidosService = {
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
      valorTotal: carrinho.valorTotal,
      criadoEm: new Date().toISOString(),
    };
    gravarLocal(CHAVE, [pedido, ...(lerLocal<PedidoResumo[]>(CHAVE) ?? [])]);
    await carrinhoService.esvaziar();

    return {
      pedidoId: pedido.id,
      status: pedido.status,
      valorTotal: pedido.valorTotal,
    };
  },

  // GET /comprador/pedidos
  async listar(): Promise<RespostaPedidos> {
    return { pedidos: lerLocal<PedidoResumo[]>(CHAVE) ?? [] };
  },
};
