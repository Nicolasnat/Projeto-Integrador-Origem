// Acesso seguro ao localStorage: janela privada e SSR não podem quebrar a tela.
const PREFIXO = "origem:";

export function lerLocal<T>(chave: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const bruto = window.localStorage.getItem(PREFIXO + chave);
    return bruto ? (JSON.parse(bruto) as T) : null;
  } catch {
    return null;
  }
}

export function gravarLocal(chave: string, valor: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIXO + chave, JSON.stringify(valor));
  } catch {
    // Sem espaço ou bloqueado: o estado segue só em memória.
  }
}

export function apagarLocal(chave: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PREFIXO + chave);
  } catch {
    // Nada a fazer.
  }
}
