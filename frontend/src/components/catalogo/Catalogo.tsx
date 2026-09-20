"use client";

import { Drawer, Portal } from "@chakra-ui/react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Filtros } from "@/components/catalogo/Filtros";
import { Paginacao } from "@/components/catalogo/Paginacao";
import { useFiltrosUrl } from "@/components/catalogo/useFiltrosUrl";
import { Container } from "@/components/layout/Container";
import {
  ProdutoGrade,
  ProdutoGradeEsqueleto,
} from "@/components/produto/ProdutoGrade";
import { Botao } from "@/components/ui/Botao";
import { EstadoErro } from "@/components/ui/EstadoErro";
import { EstadoVazio } from "@/components/ui/EstadoVazio";
import { Selecao } from "@/components/ui/Selecao";
import { useProdutos } from "@/hooks/useProdutos";
import { plural } from "@/lib/formato";

const ORDENACOES = [
  { id: "menor-preco", nome: "Menor preço" },
  { id: "maior-preco", nome: "Maior preço" },
  { id: "melhor-avaliacao", nome: "Melhor avaliação" },
];

export function Catalogo() {
  const { filtros, texto, atualizar, limpar, ativos } = useFiltrosUrl();
  const { dados, carregando, erro, recarregar } = useProdutos(filtros);
  const [gavetaAberta, setGavetaAberta] = useState(false);

  const totalPaginas = dados ? Math.ceil(dados.total / dados.limite) : 0;

  function buscar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const termo = String(new FormData(evento.currentTarget).get("termo") ?? "");
    atualizar({ termo: termo.trim() || null });
  }

  return (
    <Container className="flex flex-col gap-6 py-secao">
      <form role="search" onSubmit={buscar} className="relative">
        <label htmlFor="catalogo-busca" className="sr-only">
          Buscar no catálogo
        </label>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tinta-3"
          aria-hidden="true"
        />
        <input
          id="catalogo-busca"
          key={texto("termo")}
          name="termo"
          type="search"
          defaultValue={texto("termo")}
          placeholder="Busque por peça, técnica, artesão ou cidade"
          className="h-14 w-full rounded-raio border border-terracota bg-superficie pl-12 pr-28 text-corpo text-tinta placeholder:text-tinta-4"
        />
        <Botao type="submit" className="absolute right-2 top-1/2 h-10 -translate-y-1/2">
          Buscar
        </Botao>
      </form>

      <div className="grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)]">
        <aside aria-labelledby="filtros-titulo" className="hidden lg:block">
          <h2
            id="filtros-titulo"
            className="mb-4 font-titulo text-h2 font-bold text-tinta"
          >
            Filtros
          </h2>
          <Filtros prefixo="coluna" valor={texto} aoMudar={atualizar} />
        </aside>

        <section aria-labelledby="catalogo-titulo" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1
                id="catalogo-titulo"
                className="font-titulo text-h1 font-bold text-tinta"
              >
                Feito à mão, encontrado por você
              </h1>
              <p className="min-h-5 text-apoio text-tinta-3" aria-live="polite">
                {dados &&
                  plural(dados.total, "peça encontrada", "peças encontradas")}
                {carregando && "Procurando peças"}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-2">
              <Drawer.Root
                open={gavetaAberta}
                onOpenChange={(detalhe) => setGavetaAberta(detalhe.open)}
                placement="start"
              >
                <Drawer.Trigger asChild>
                  <Botao variante="secundario" className="lg:hidden">
                    <SlidersHorizontal className="size-4" aria-hidden="true" />
                    Filtrar{ativos > 0 ? ` (${ativos})` : ""}
                  </Botao>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content>
                      <Drawer.Header>
                        <Drawer.Title>Filtros</Drawer.Title>
                        <Drawer.CloseTrigger asChild>
                          <button
                            type="button"
                            aria-label="Fechar filtros"
                            className="inline-flex size-10 items-center justify-center rounded-raio text-tinta hover:bg-superficie-2"
                          >
                            <X className="size-5" aria-hidden="true" />
                          </button>
                        </Drawer.CloseTrigger>
                      </Drawer.Header>
                      <Drawer.Body>
                        <Filtros
                          prefixo="gaveta"
                          valor={texto}
                          aoMudar={atualizar}
                        />
                      </Drawer.Body>
                      <Drawer.Footer>
                        <Botao
                          larguraTotal
                          onClick={() => setGavetaAberta(false)}
                        >
                          Ver peças
                        </Botao>
                      </Drawer.Footer>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>

              <div className="w-48">
                <Selecao
                  compacto
                  id="catalogo-ordenar"
                  rotulo="Ordenar por"
                  vazio="Mais relevantes"
                  opcoes={ORDENACOES}
                  value={texto("ordenar")}
                  onChange={(e) => atualizar({ ordenar: e.target.value || null })}
                />
              </div>
            </div>
          </div>

          {ativos > 0 && (
            <Botao
              variante="fantasma"
              className="h-auto self-start"
              onClick={limpar}
            >
              <X className="size-4" aria-hidden="true" />
              Limpar {plural(ativos, "filtro", "filtros")}
            </Botao>
          )}

          {carregando && (
            <ProdutoGradeEsqueleto quantidade={8} colunas="catalogo" />
          )}
          {erro && (
            <EstadoErro mensagem={erro.message} aoTentarDeNovo={recarregar} />
          )}
          {dados && dados.itens.length === 0 && (
            <EstadoVazio
              titulo="Nenhuma peça com esses filtros"
              descricao="Tente um termo mais curto, ou tire algum filtro."
              acao={
                ativos > 0 ? (
                  <Botao variante="contorno" onClick={limpar}>
                    Limpar filtros
                  </Botao>
                ) : undefined
              }
            />
          )}
          {dados && dados.itens.length > 0 && (
            <>
              <ProdutoGrade produtos={dados.itens} colunas="catalogo" />
              <Paginacao
                pagina={dados.pagina}
                totalPaginas={totalPaginas}
                aoMudar={(pagina) => atualizar({ pagina: String(pagina) })}
              />
            </>
          )}
        </section>
      </div>
    </Container>
  );
}
