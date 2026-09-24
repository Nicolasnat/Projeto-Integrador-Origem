import { apagarLocal, gravarLocal, lerLocal } from "@/lib/armazenamento";
import { http } from "@/lib/http";
import type { DadosCadastro, DadosLogin, Sessao, Usuario } from "@/types";

const CHAVE = "sessao";

export const authService = {
  sessaoAtual(): Sessao | null {
    return lerLocal<Sessao>(CHAVE);
  },

  async entrar(dados: DadosLogin): Promise<Sessao> {
    const sessao = await http<Sessao>("/auth/login", {
      metodo: "POST",
      corpo: dados,
    });
    gravarLocal(CHAVE, sessao);
    return sessao;
  },

  // Fake API: o cadastro não fica guardado no servidor, então a sessão nasce aqui.
  // Avaliação 2: trocar o bloco final por uma chamada a entrar() com as mesmas credenciais.
  async cadastrar(dados: DadosCadastro): Promise<Sessao> {
    const usuario = await http<Usuario>("/auth/register", {
      metodo: "POST",
      corpo: dados,
    });
    const sessao: Sessao = {
      token: `fake.${usuario.id}.${Date.now()}`,
      tipo: "Bearer",
      usuario: { id: usuario.id, nome: usuario.nome, papel: usuario.papel },
    };
    gravarLocal(CHAVE, sessao);
    return sessao;
  },

  async sair(): Promise<void> {
    apagarLocal(CHAVE);
  },
};
