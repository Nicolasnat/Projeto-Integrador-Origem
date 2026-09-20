"use client";

import { LoaderCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { useCarrinho } from "@/hooks/useCarrinho";
import type { ProdutoResumo } from "@/types";

// Botão quadrado do card. Adiciona uma unidade e avisa por toast.
export function BotaoCarrinho({ produto }: { produto: ProdutoResumo }) {
  const { adicionar } = useCarrinho();
  const [enviando, setEnviando] = useState(false);
  const indisponivel = produto.disponibilidade !== "DISPONIVEL";

  async function aoClicar() {
    setEnviando(true);
    try {
      await adicionar(produto);
      toaster.create({
        type: "success",
        title: "Peça no carrinho",
        description: produto.nome,
      });
    } catch {
      toaster.create({
        type: "error",
        title: "Não deu para adicionar",
        description: "Tente de novo em instantes.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <button
      type="button"
      onClick={aoClicar}
      disabled={enviando || indisponivel}
      aria-busy={enviando || undefined}
      aria-label={
        indisponivel
          ? `${produto.nome} não está disponível`
          : `Adicionar ${produto.nome} ao carrinho`
      }
      className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-raio bg-terracota text-white transition-colors duration-150 hover:bg-terracota-escura disabled:cursor-not-allowed disabled:bg-borda-forte"
    >
      {enviando ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <ShoppingCart className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
