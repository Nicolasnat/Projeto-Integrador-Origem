const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const nota = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const inteiro = new Intl.NumberFormat("pt-BR");

const dataCurta = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function formatarMoeda(valor: number): string {
  return moeda.format(valor);
}

export function formatarNota(valor: number): string {
  return nota.format(valor);
}

export function formatarInteiro(valor: number): string {
  return inteiro.format(valor);
}

export function formatarData(iso: string): string {
  return dataCurta.format(new Date(iso));
}

export function plural(quantidade: number, um: string, varios: string): string {
  return `${formatarInteiro(quantidade)} ${quantidade === 1 ? um : varios}`;
}
