"use client";

import { useEffect, useSyncExternalStore } from "react";
import { authService } from "@/services/auth";
import { sessaoStore } from "@/store/sessao";
import type { DadosCadastro, DadosLogin } from "@/types";

let carregada = false;

function carregarUmaVez() {
  if (carregada) return;
  carregada = true;
  sessaoStore.definir(authService.sessaoAtual());
}

export function useSessao() {
  const sessao = useSyncExternalStore(
    sessaoStore.assinar,
    sessaoStore.obter,
    () => null,
  );

  useEffect(() => {
    carregarUmaVez();
  }, []);

  return {
    sessao,
    usuario: sessao?.usuario ?? null,

    async entrar(dados: DadosLogin) {
      sessaoStore.definir(await authService.entrar(dados));
    },

    async cadastrar(dados: DadosCadastro) {
      sessaoStore.definir(await authService.cadastrar(dados));
    },

    async sair() {
      await authService.sair();
      sessaoStore.definir(null);
    },
  };
}
