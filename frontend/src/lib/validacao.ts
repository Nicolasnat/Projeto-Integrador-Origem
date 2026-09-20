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
