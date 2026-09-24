// Store mínima para useSyncExternalStore. Sem biblioteca.
export type Store<T> = {
  obter: () => T;
  definir: (valor: T) => void;
  assinar: (ouvinte: () => void) => () => void;
};

export function criarStore<T>(inicial: T): Store<T> {
  let estado = inicial;
  const ouvintes = new Set<() => void>();

  return {
    obter: () => estado,
    definir(valor) {
      estado = valor;
      ouvintes.forEach((ouvinte) => ouvinte());
    },
    assinar(ouvinte) {
      ouvintes.add(ouvinte);
      return () => ouvintes.delete(ouvinte);
    },
  };
}
