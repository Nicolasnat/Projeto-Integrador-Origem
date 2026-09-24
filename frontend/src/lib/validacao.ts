const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarNome(valor: string): string | undefined {
  if (valor.trim().length < 3) return "Digite seu nome completo.";
}

export function validarEmail(valor: string): string | undefined {
  if (!valor.trim()) return "Digite seu e-mail.";
  if (!EMAIL.test(valor.trim())) return "Esse e-mail parece incompleto.";
}

export function validarSenhaLogin(valor: string): string | undefined {
  if (!valor) return "Digite sua senha.";
}

export function validarSenhaNova(valor: string): string | undefined {
  if (valor.length < 8) return "Use pelo menos 8 caracteres.";
}

export function validarCep(valor: string): string | undefined {
  if (!/^\d{5}-?\d{3}$/.test(valor.trim())) return "Digite um CEP válido.";
}

export function validarRua(valor: string): string | undefined {
  if (valor.trim().length < 3) return "Digite o nome da rua.";
}

export function validarNumero(valor: string): string | undefined {
  if (!valor.trim()) return "Digite o número.";
}

export function validarNumeroCartao(valor: string): string | undefined {
  if (valor.replace(/\D/g, "").length !== 16) {
    return "Digite os 16 números do cartão.";
  }
}

export function validarValidadeCartao(valor: string): string | undefined {
  if (!/^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/.test(valor.trim())) {
    return "Use o formato MM / AA.";
  }
}

export function validarCvv(valor: string): string | undefined {
  if (!/^\d{3,4}$/.test(valor.trim())) return "Digite o código de segurança.";
}
