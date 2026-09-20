// Dados da Fake API. Só src/app/api importa daqui.
// As duas fotos vieram do Figma e se repetem até a equipe ter foto real de cada peça.
import type { Disponibilidade, ModalidadeProducao } from "@/types";

export type ProdutoMock = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagens: string[];
  artesaoId: string;
  categoriaId: string;
  tecnicaId: string;
  seloAtivo: boolean;
  modalidadeProducao: ModalidadeProducao;
  disponibilidade: Disponibilidade;
  estoque: number;
  destaque: boolean;
};

const VASO = "/produtos/vaso-ceramica.jpg";
const PASSARO = "/produtos/passaro-madeira.jpg";

export const produtos: ProdutoMock[] = [
  {
    id: "prd_201",
    nome: "Vaso Cerâmica Raízes",
    preco: 160,
    descricao:
      "Modelado e pintado à mão, este vaso reúne grafismos e memórias da Zona da Mata. Cada marca revela o gesto de quem fez e torna a peça irrepetível.",
    imagens: [VASO, PASSARO, VASO],
    artesaoId: "usr_905",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "ceramica",
    seloAtivo: true,
    modalidadeProducao: "PECA_UNICA",
    disponibilidade: "DISPONIVEL",
    estoque: 1,
    destaque: true,
  },
  {
    id: "prd_202",
    nome: "Luminária de Barro",
    preco: 120,
    descricao:
      "Cúpula vazada à faca, ainda com o barro úmido. A luz atravessa os recortes e desenha a parede.",
    imagens: [PASSARO, VASO],
    artesaoId: "usr_901",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "ceramica",
    seloAtivo: false,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 6,
    destaque: true,
  },
  {
    id: "prd_203",
    nome: "Pássaro de Madeira",
    preco: 70,
    descricao:
      "Entalhado em umburana, madeira leve do sertão. Pintura com pigmento à base de água e acabamento em cera.",
    imagens: [PASSARO, VASO],
    artesaoId: "usr_903",
    categoriaId: "artesanato",
    tecnicaId: "entalhe-em-madeira",
    seloAtivo: true,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 9,
    destaque: true,
  },
  {
    id: "prd_204",
    nome: "Toalha Bordada Ponto Cheio",
    preco: 85,
    descricao:
      "Linho cru com flores em ponto cheio. Cerca de quarenta horas de agulha em cada toalha.",
    imagens: [VASO],
    artesaoId: "usr_902",
    categoriaId: "artesanato",
    tecnicaId: "bordado",
    seloAtivo: false,
    modalidadeProducao: "SOB_ENCOMENDA",
    disponibilidade: "DISPONIVEL",
    estoque: 3,
    destaque: true,
  },
  {
    id: "prd_205",
    nome: "Galo do Alto do Moura",
    preco: 95,
    descricao:
      "Figura de barro queimada em forno a lenha e pintada a frio, no estilo das feiras de Caruaru.",
    imagens: [PASSARO, VASO],
    artesaoId: "usr_901",
    categoriaId: "artesanato",
    tecnicaId: "ceramica",
    seloAtivo: true,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 12,
    destaque: false,
  },
  {
    id: "prd_206",
    nome: "Carranca Guardiã",
    preco: 340,
    descricao:
      "Carranca de proa com 40 cm, talhada em cedro. Nas barcas do São Francisco, espantava o mau agouro.",
    imagens: [PASSARO],
    artesaoId: "usr_903",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "entalhe-em-madeira",
    seloAtivo: true,
    modalidadeProducao: "PECA_UNICA",
    disponibilidade: "RESERVADO",
    estoque: 1,
    destaque: false,
  },
  {
    id: "prd_207",
    nome: "Xilogravura A Chegada da Chuva",
    preco: 180,
    descricao:
      "Impressão manual em papel de algodão, 33 por 48 cm. Tiragem de 50 cópias, numeradas e assinadas.",
    imagens: [VASO],
    artesaoId: "usr_904",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "xilogravura",
    seloAtivo: true,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 14,
    destaque: false,
  },
  {
    id: "prd_208",
    nome: "Matriz Entalhada Pavão",
    preco: 520,
    descricao:
      "A própria matriz de madeira usada na impressão, pronta para pendurar. Só existe uma.",
    imagens: [PASSARO],
    artesaoId: "usr_904",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "xilogravura",
    seloAtivo: true,
    modalidadeProducao: "PECA_UNICA",
    disponibilidade: "VENDIDO",
    estoque: 0,
    destaque: false,
  },
  {
    id: "prd_209",
    nome: "Folheto O Vaqueiro e a Lua",
    preco: 12,
    descricao:
      "Cordel de 16 páginas em sextilhas, com capa em xilogravura. Costurado à mão.",
    imagens: [VASO],
    artesaoId: "usr_906",
    categoriaId: "literatura",
    tecnicaId: "cordel",
    seloAtivo: false,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 80,
    destaque: false,
  },
  {
    id: "prd_210",
    nome: "Coleção Pajeú em Versos",
    preco: 58,
    descricao:
      "Caixa com seis folhetos sobre festas, secas e amores do sertão. Acompanha marcador em xilogravura.",
    imagens: [PASSARO],
    artesaoId: "usr_906",
    categoriaId: "literatura",
    tecnicaId: "cordel",
    seloAtivo: true,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 22,
    destaque: false,
  },
  {
    id: "prd_211",
    nome: "Caminho de Mesa Richelieu",
    preco: 210,
    descricao:
      "Algodão branco recortado e bordado em richelieu, 1,60 m. Feito sob medida em até 20 dias.",
    imagens: [VASO],
    artesaoId: "usr_902",
    categoriaId: "artesanato",
    tecnicaId: "bordado",
    seloAtivo: true,
    modalidadeProducao: "SOB_ENCOMENDA",
    disponibilidade: "DISPONIVEL",
    estoque: 2,
    destaque: false,
  },
  {
    id: "prd_212",
    nome: "Moringa com Caneca",
    preco: 78,
    descricao:
      "Barro sem esmalte, que mantém a água fresca. A caneca encaixa como tampa.",
    imagens: [VASO, PASSARO],
    artesaoId: "usr_905",
    categoriaId: "artesanato",
    tecnicaId: "ceramica",
    seloAtivo: false,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 15,
    destaque: false,
  },
  {
    id: "prd_213",
    nome: "Santo Antônio de Barro",
    preco: 260,
    descricao:
      "Imagem sacra de 30 cm no traço alongado de Tracunhaém. Queima única, sem pintura.",
    imagens: [PASSARO, VASO],
    artesaoId: "usr_905",
    categoriaId: "arte-e-decoracao",
    tecnicaId: "ceramica",
    seloAtivo: true,
    modalidadeProducao: "PECA_UNICA",
    disponibilidade: "DISPONIVEL",
    estoque: 1,
    destaque: false,
  },
  {
    id: "prd_214",
    nome: "Trio de Aves do Sertão",
    preco: 150,
    descricao:
      "Carcará, asa-branca e galo-de-campina em umburana. Vendidos juntos, com base de apoio.",
    imagens: [PASSARO],
    artesaoId: "usr_903",
    categoriaId: "artesanato",
    tecnicaId: "entalhe-em-madeira",
    seloAtivo: false,
    modalidadeProducao: "PRONTA_ENTREGA",
    disponibilidade: "DISPONIVEL",
    estoque: 4,
    destaque: false,
  },
];
