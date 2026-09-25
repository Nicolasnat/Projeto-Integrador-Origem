// Contratos de dados do frontend. Espelho de docs/ContratoDeAPI.md.
// Nome de campo igual ao do contrato. Campo que o contrato ainda não tem está marcado com "lacuna".

export type Paginado<T> = {
  total: number;
  pagina: number;
  limite: number;
  itens: T[];
};

export type RespostaMensagem = {
  mensagem: string;
};

export type Referencia = {
  id: string;
  nome: string;
};

// Catálogo de apoio (lacuna: GET /categorias, /tecnicas, /regioes)

export type Categoria = Referencia;
export type Tecnica = Referencia;
export type Regiao = Referencia;

// Produtos

export type ModalidadeProducao =
  | "PECA_UNICA"
  | "PRONTA_ENTREGA"
  | "SOB_ENCOMENDA";

export type Disponibilidade = "DISPONIVEL" | "RESERVADO" | "VENDIDO";

export type ProdutoResumo = {
  id: string;
  nome: string;
  preco: number;
  imagemPrincipal: string;
  artesao: Referencia;
  seloAtivo: boolean;
  // lacunas: o card do Figma mostra região, e o catálogo filtra por estes campos
  regiao: Regiao;
  modalidadeProducao: ModalidadeProducao;
  disponibilidade: Disponibilidade;
  avaliacaoMedia: number;
};

export type ProdutoDetalhe = ProdutoResumo & {
  artesao: Referencia & { loja: string; cidade: string };
  // lacunas: campos da tela "Detalhes do produto"
  descricao: string;
  imagens: string[];
  categoria: Categoria;
  tecnica: Tecnica;
  estoque: number;
  totalAvaliacoes: number;
};

export type OrdenacaoProdutos =
  | "relevancia"
  | "menor-preco"
  | "maior-preco"
  | "melhor-avaliacao";

export type FiltrosProdutos = {
  termo?: string;
  categoria?: string;
  tecnica?: string;
  regiao?: string;
  precoMax?: number;
  avaliacaoMin?: number;
  disponivel?: boolean;
  pecaUnica?: boolean;
  ordenar?: OrdenacaoProdutos;
  pagina?: number;
  limite?: number;
};

export type RespostaRecomendacoes = {
  recomendados: ProdutoResumo[];
};

// Artesãos

export type ArtesaoPerfil = {
  id: string;
  nome: string;
  nomeLoja: string;
  biografia: string;
  regiao: string;
  produtos: ProdutoResumo[];
  // lacunas: a tela "Loja do artesão" mostra foto, técnica, história, avaliações e vendas
  foto: string | null;
  tecnica: string;
  especialidade: string;
  verificado: boolean;
  historia: string[];
  citacao: string;
  imagens: string[];
  avaliacaoMedia: number;
  totalAvaliacoes: number;
  pecasVendidas: number;
};

// Avaliações (lacuna: GET /produtos/{id}/avaliacoes)

export type Avaliacao = {
  id: string;
  produtoId: string;
  autor: string;
  nota: number;
  comentario: string;
  criadoEm: string;
};

export type RespostaAvaliacoes = {
  media: number;
  total: number;
  itens: Avaliacao[];
};

// Usuários e sessão

export type Papel = "COMPRADOR" | "ARTESAO" | "ADMINISTRADOR";

export type Usuario = {
  id: string;
  nome: string;
  email: string;
  papel: Papel;
  criadoEm: string;
};

export type DadosCadastro = {
  nome: string;
  email: string;
  senha: string;
  papel: Papel;
  // lacunas: o Figma pede técnica e região no cadastro de artesão
  tecnica?: string;
  regiao?: string;
};

export type DadosLogin = {
  email: string;
  senha: string;
};

export type Sessao = {
  token: string;
  tipo: "Bearer";
  usuario: Pick<Usuario, "id" | "nome" | "papel">;
};

// Carrinho

export type ItemCarrinho = {
  produtoId: string;
  quantidade: number;
  precoUnitario: number;
  // lacunas: a tela do carrinho precisa mostrar a peça sem buscar uma a uma
  nome: string;
  imagemPrincipal: string;
};

export type Carrinho = {
  itens: ItemCarrinho[];
  valorTotal: number;
};

// Pedidos

export type StatusPedido =
  | "AGUARDANDO_PAGAMENTO"
  | "PAGO"
  | "ENVIADO"
  | "ENTREGUE"
  | "CANCELADO";

export type EnderecoEntrega = {
  cep: string;
  rua: string;
  numero: string;
};

export type OpcaoEnvio = {
  id: string;
  nome: string;
  prazo: string;
  valor: number;
};

export type PedidoCriado = {
  pedidoId: string;
  status: StatusPedido;
  valorTotal: number;
};

export type PedidoResumo = {
  id: string;
  status: StatusPedido;
  valorTotal: number;
  criadoEm: string;
  // lacuna: o histórico e o acompanhamento exibem os itens comprados.
  itens: ItemCarrinho[];
};

export type RespostaPedidos = {
  pedidos: PedidoResumo[];
};

// Pagamentos

export type MetodoPagamento = "CARTAO_CREDITO" | "PIX" | "BOLETO";

export type DadosPagamento = {
  pedidoId: string;
  metodoPagamento: MetodoPagamento;
  tokenCartao: string | null;
};

export type PagamentoProcessado = {
  transacaoId: string;
  status: "APROVADO" | "RECUSADO";
  dataPagamento: string;
};

// Indicadores da vitrine (lacuna: GET /indicadores)

export type IndicadoresVitrine = {
  totalArtesaos: number;
  totalProdutos: number;
  avaliacaoMedia: number;
  totalAvaliacoes: number;
};

export type MetricasAdmin = {
  totalUsuarios: number;
  totalArtesaos: number;
  volumeTransacionadoGlobal: number;
  totalVendas: number;
  variacaoVendas: number;
  totalArtesaosAtivos: number;
  novosArtesaosNoMes: number;
  totalProdutos: number;
  novosProdutos: number;
  ticketsSuporte: number;
  ticketsUrgentes: number;
  validacoesPendentes: number;
  vendasPorRegiao: { sigla: string; percentual: number }[];
  categoriasMaisVendidas: { nome: string; percentual: number }[];
  denunciasPendentes: number;
  usuariosRecentes: { nome: string; papel: string }[];
  atividadesRecentes: string[];
};
