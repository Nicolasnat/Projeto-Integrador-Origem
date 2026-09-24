"use client";

import { useEffect, useSyncExternalStore } from "react";
import { carrinhoService } from "@/services/carrinho";
import { CARRINHO_VAZIO, carrinhoStore } from "@/store/carrinho";
import type { ProdutoResumo } from "@/types";

let carregado = false;
let carregamento: Promise<void> | null = null;

function carregarUmaVez(): Promise<void> {
  if (carregado) return Promise.resolve();
  if (carregamento) return carregamento;

  carregamento = carrinhoService.obter().then((carrinho) => {
    carregado = true;
    carrinhoStore.definir(carrinho);
  });
  return carregamento;
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
    carregando: !carregado,
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

    async esvaziar() {
      carrinhoStore.definir(await carrinhoService.esvaziar());
    },
  };
}
