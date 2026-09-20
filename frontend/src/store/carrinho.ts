import { criarStore } from "@/store/criar-store";
import type { Carrinho } from "@/types";

export const CARRINHO_VAZIO: Carrinho = { itens: [], valorTotal: 0 };

export const carrinhoStore = criarStore<Carrinho>(CARRINHO_VAZIO);
