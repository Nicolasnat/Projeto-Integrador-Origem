"use client";

import { useEffect, useSyncExternalStore } from "react";
import { carrinhoService } from "@/services/carrinho";
import { CARRINHO_VAZIO, carrinhoStore } from "@/store/carrinho";
import type { ProdutoResumo } from "@/types";

let carregado = false;

async function carregarUmaVez() {
  if (carregado) return;
  carregado = true;
  carrinhoStore.definir(await carrinhoService.obter());
}

export function useCarrinho() {
  const carrinho = useSyncExternalStore(
    carrinhoStore.assinar,
    carrinhoStore.obter,
    () => CARRINHO_VAZIO,
  );

  useEffect(() => {
    void carregarUmaVez();
  }, []);

  return {
    carrinho,
    totalItens: carrinho.itens.reduce((n, item) => n + item.quantidade, 0),

    async adicionar(produto: ProdutoResumo, quantidade = 1) {
      carrinhoStore.definir(
        await carrinhoService.adicionar(produto, quantidade),
      );
    },

    async alterarQuantidade(produtoId: string, quantidade: number) {
      carrinhoStore.definir(
        await carrinhoService.alterarQuantidade(produtoId, quantidade),
      );
    },

    async remover(produtoId: string) {
      carrinhoStore.definir(await carrinhoService.remover(produtoId));
    },
  };
}
