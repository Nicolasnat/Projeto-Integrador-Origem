# Definição das Funcionalidades de IA — Sistema Origem

## 1. Problema Geral de IA

O Sistema Origem possui oportunidades de aplicação de Inteligência Artificial em dois momentos principais:

1. **Descoberta de produtos:** recomendar ao cliente produtos artesanais relacionados ao que ele está visualizando ou pesquisando.
2. **Atendimento ao cliente:** realizar uma triagem inicial das solicitações de suporte, classificando-as e encaminhando para atendimento humano quando necessário.

Essas duas aplicações estão previstas no backlog do projeto, respectivamente nas histórias **HU-17 — Recomendação de produtos** e **HU-23 — Triagem inteligente e escalonamento do suporte**.

---

# 2. IA 1 — Recomendação de Produtos

## Problema

O cliente pode ter dificuldade para descobrir outros produtos artesanais relevantes a partir de um produto que está consultando ou dos filtros utilizados na pesquisa.

A HU-17 define como objetivo recomendar ao cliente peças relacionadas ao produto ou aos filtros consultados, permitindo descobrir outros produtos artesanais relevantes.

## Entrada

O módulo poderá utilizar:

- Produto atualmente visualizado;
- Produtos disponíveis no catálogo;
- Categoria;
- Técnica;
- Região;
- Atributos de categorização dos produtos;
- Filtros utilizados pelo cliente.

## Processamento

O módulo deverá:

1. Identificar produtos candidatos;
2. Comparar os atributos dos produtos;
3. Calcular a similaridade entre os produtos;
4. Priorizar produtos relacionados;
5. Excluir o produto que o cliente já está visualizando;
6. Excluir produtos indisponíveis;
7. Apresentar uma justificativa simples para a recomendação.

O backlog prevê que o algoritmo possa começar utilizando critérios simples, como **mesma categoria ou técnica**, e posteriormente evoluir.

## Saída

Uma lista de produtos recomendados, contendo produtos relacionados ao contexto da consulta.

A recomendação deverá indicar uma justificativa simples, como relação por:

- Categoria;
- Técnica;
- Região.

## Fallback

Quando não houver quantidade suficiente de correspondências diretas, o sistema deverá:

- Ampliar os critérios de busca de maneira documentada;
- Ocultar a seção de recomendações.

Não deverão ser apresentados produtos indisponíveis.

## Integração

A recomendação será disponibilizada na página de detalhes do produto, em uma seção como **"Você também pode gostar"**, carregada de forma assíncrona.

O sistema também deverá disponibilizar um endpoint específico para retornar as sugestões.

---

# 3. IA 2 — Triagem Inteligente do Suporte

## Problema

A equipe de suporte pode receber diferentes tipos de solicitações, tornando necessário identificar inicialmente o assunto, a urgência e o encaminhamento adequado.

A HU-23 propõe um **agente de IA para realizar uma triagem inicial**, reduzindo o tempo de resposta sem substituir o atendimento humano.

## Entrada

O módulo recebe:

- Texto do chamado;
- Informações do ticket já aberto;
- Contexto da solicitação;
- Histórico da solicitação.

## Processamento

A IA deverá:

1. Analisar o texto do chamado;
2. Sugerir uma categoria;
3. Identificar a prioridade;
4. Sugerir uma resposta inicial;
5. Identificar situações que necessitam de atendimento humano;
6. Encaminhar o ticket para a equipe responsável quando necessário.

O backlog prevê também uma classificação inicial baseada em palavras-chave.

## Escalonamento

O chamado deverá ser encaminhado para atendimento humano quando:

- A confiança da análise for insuficiente;
- O usuário solicitar atendimento humano;
- O problema não for resolvido pela triagem;
- O chamado envolver segurança;
- Envolver dados pessoais;
- Envolver pagamento;
- Envolver decisão administrativa.

Nessas situações, a IA não deverá executar ações críticas.

## Saída

A IA produzirá:

- Categoria sugerida;
- Prioridade sugerida;
- Resposta inicial;
- Indicação de necessidade de atendimento humano;
- Encaminhamento para a equipe responsável, quando aplicável.

---

# 4. Visão Consolidada

| Funcionalidade | Entrada | Processamento de IA | Saída |
|---|---|---|---|
| **Recomendação de produtos — HU-17** | Produto/filtros + atributos do catálogo | Similaridade entre produtos | Produtos relacionados + justificativa |
| **Triagem de suporte — HU-23** | Texto e contexto do ticket | Classificação e análise da solicitação | Categoria + prioridade + resposta + encaminhamento |

## 4.1 Aplicações de IA

### IA para descoberta

A IA analisa a relação entre os produtos do catálogo e recomenda itens relevantes ao cliente com base nos atributos dos produtos.

### IA para atendimento

A IA analisa as solicitações de suporte, realiza uma triagem inicial e encaminha para atendimento humano os casos que necessitam de intervenção.

---

# 5. Delimitação do Módulo para o Projeto

Embora o backlog apresente as duas aplicações de IA, elas representam **problemas distintos**.

Para o desenvolvimento da especificação do módulo de recomendação, a **HU-17 — Recomendação de produtos** será considerada o módulo principal, pois está diretamente relacionada à recomendação de produtos prevista para o marketplace.

A **HU-23 — Triagem inteligente e escalonamento do suporte** será registrada como outra aplicação de Inteligência Artificial existente no projeto, mas não fará parte do escopo do módulo de recomendação.
