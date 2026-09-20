const ETAPAS = ["Endereço", "Envio", "Pagamento", "Revisão"];

export function EtapasCompra({ atual }: { atual: 2 | 3 | 4 }) {
  return (
    <ol aria-label="Etapas da compra" className="grid grid-cols-4 gap-2">
      {ETAPAS.map((nome, indice) => {
        const numero = indice + 1;
        const concluida = numero <= atual;
        const ativa = numero === atual;

        return (
          <li
            key={nome}
            className={`flex min-w-0 flex-col gap-2 ${
              indice === 0
                ? "items-start"
                : indice === ETAPAS.length - 1
                  ? "items-end"
                  : "items-center"
            }`}
          >
            <span
              className={`inline-flex size-6 items-center justify-center rounded-full border text-legenda tabular-nums ${
                concluida
                  ? "border-terracota bg-terracota text-white"
                  : "border-borda bg-superficie text-tinta-3"
              }`}
              aria-current={ativa ? "step" : undefined}
            >
              {numero}
            </span>
            <span
              className={`truncate text-legenda sm:text-apoio ${
                ativa ? "font-bold text-tinta" : "text-tinta-3"
              }`}
            >
              {nome}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
