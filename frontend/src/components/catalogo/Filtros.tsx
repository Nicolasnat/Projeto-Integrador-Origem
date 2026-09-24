"use client";

import { Botao } from "@/components/ui/Botao";
import { Selecao } from "@/components/ui/Selecao";
import { useCategorias, useRegioes, useTecnicas } from "@/hooks/useCatalogo";
import type { Consulta } from "@/hooks/useConsulta";
import type { Referencia } from "@/types";

const FAIXAS_DE_PRECO = [
  { id: "100", nome: "Até R$ 100" },
  { id: "200", nome: "Até R$ 200" },
  { id: "400", nome: "Até R$ 400" },
];

const NOTAS_MINIMAS = [
  { id: "4", nome: "4 estrelas ou mais" },
  { id: "4.5", nome: "4,5 estrelas ou mais" },
];

type FiltrosProps = {
  // Prefixo dos ids: os filtros aparecem duas vezes na página (coluna e gaveta).
  prefixo: string;
  valor: (chave: string) => string;
  aoMudar: (mudancas: Record<string, string | null>) => void;
};

function SelecaoDaApi({
  consulta,
  ...props
}: {
  consulta: Consulta<Referencia[]>;
  id: string;
  rotulo: string;
  value: string;
  onChange: (evento: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  if (consulta.erro) {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-apoio font-bold text-tinta">{props.rotulo}</p>
        <p className="text-legenda text-erro">Não carregou.</p>
        <Botao
          variante="fantasma"
          className="h-auto self-start"
          onClick={consulta.recarregar}
        >
          Tentar de novo
        </Botao>
      </div>
    );
  }

  return (
    <Selecao
      compacto
      vazio={consulta.carregando ? "Carregando" : "Todas"}
      opcoes={consulta.dados ?? []}
      disabled={!consulta.dados}
      {...props}
    />
  );
}

export function Filtros({ prefixo, valor, aoMudar }: FiltrosProps) {
  const categorias = useCategorias();
  const regioes = useRegioes();
  const tecnicas = useTecnicas();

  const selecao = (chave: string) => ({
    id: `${prefixo}-${chave}`,
    value: valor(chave),
    onChange: (evento: React.ChangeEvent<HTMLSelectElement>) =>
      aoMudar({ [chave]: evento.target.value || null }),
  });

  const caixa = (chave: string) => ({
    checked: valor(chave) === "true",
    onChange: (evento: React.ChangeEvent<HTMLInputElement>) =>
      aoMudar({ [chave]: evento.target.checked ? "true" : null }),
  });

  return (
    <div className="flex flex-col gap-4">
      <SelecaoDaApi
        consulta={categorias}
        rotulo="Categoria"
        {...selecao("categoria")}
      />
      <SelecaoDaApi consulta={regioes} rotulo="Região" {...selecao("regiao")} />
      <SelecaoDaApi
        consulta={tecnicas}
        rotulo="Técnica artesanal"
        {...selecao("tecnica")}
      />
      <Selecao
        compacto
        rotulo="Faixa de preço"
        vazio="Todas"
        opcoes={FAIXAS_DE_PRECO}
        {...selecao("precoMax")}
      />
      <Selecao
        compacto
        rotulo="Avaliação"
        vazio="Todas"
        opcoes={NOTAS_MINIMAS}
        {...selecao("avaliacaoMin")}
      />

      <label className="flex min-h-10 cursor-pointer items-center gap-3 text-apoio text-tinta">
        <input
          type="checkbox"
          className="size-5 accent-terracota"
          {...caixa("disponivel")}
        />
        Só peças disponíveis
      </label>
      <label className="flex min-h-10 cursor-pointer items-center gap-3 text-apoio text-tinta">
        <input
          type="checkbox"
          className="size-5 accent-terracota"
          {...caixa("pecaUnica")}
        />
        Só peças únicas
      </label>
    </div>
  );
}
