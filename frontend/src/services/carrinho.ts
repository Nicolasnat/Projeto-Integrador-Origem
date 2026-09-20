// Fake API: o carrinho mora no localStorage, porque rota serverless não guarda estado.
// A assinatura já é a do backend (ContratoDeAPI.md, 2.6). Avaliação 2: trocar o miolo por http().
import { gravarLocal, lerLocal } from "@/lib/armazenamento";
import type { Carrinho, ItemCarrinho, ProdutoResumo } from "@/types";

const CHAVE = "carrinho";
const ATRASO_MS = 300;

function esperar(): Promise<void> {
  return new Promise((resolver) => setTimeout(resolver, ATRASO_MS));
}

function ler(): ItemCarrinho[] {
  return lerLocal<ItemCarrinho[]>(CHAVE) ?? [];
}

function montar(itens: ItemCarrinho[]): Carrinho {
  const valorTotal = itens.reduce(
    (total, item) => total + item.precoUnitario * item.quantidade,
    0,
  );
  return { itens, valorTotal };
}

function salvar(itens: ItemCarrinho[]): Carrinho {
  gravarLocal(CHAVE, itens);
  return montar(itens);
}

export const carrinhoService = {
  // GET /carrinho
  async obter(): Promise<Carrinho> {
    return montar(ler());
  },

  // POST /carrinho/itens
  async adicionar(produto: ProdutoResumo, quantidade = 1): Promise<Carrinho> {
    await esperar();
    const itens = ler();
    const existente = itens.find((item) => item.produtoId === produto.id);

    if (existente) {
      existente.quantidade += quantidade;
    } else {
      itens.push({
        produtoId: produto.id,
        quantidade,
        precoUnitario: produto.preco,
        nome: produto.nome,
        imagemPrincipal: produto.imagemPrincipal,
      });
    }
    return salvar(itens);
  },

  async alterarQuantidade(
    produtoId: string,
    quantidade: number,
  ): Promise<Carrinho> {
    await esperar();
    const itens = ler()
      .map((item) =>
        item.produtoId === produtoId ? { ...item, quantidade } : item,
      )
      .filter((item) => item.quantidade > 0);
    return salvar(itens);
  },

  // DELETE /carrinho/itens/{produtoId}
  async remover(produtoId: string): Promise<Carrinho> {
    await esperar();
    return salvar(ler().filter((item) => item.produtoId !== produtoId));
  },

  async esvaziar(): Promise<Carrinho> {
    return salvar([]);
  },
};
