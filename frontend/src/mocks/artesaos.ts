// Dados da Fake API. Só src/app/api importa daqui.
// Pessoas e ateliês fictícios. As cidades e técnicas são polos reais de Pernambuco.

export type ArtesaoMock = {
  id: string;
  nome: string;
  nomeLoja: string;
  biografia: string;
  cidade: string;
  regiaoId: string;
};

export const artesaos: ArtesaoMock[] = [
  {
    id: "usr_901",
    nome: "Ana Pereira",
    nomeLoja: "Barro do Alto",
    biografia:
      "Terceira geração de louceiras do Alto do Moura. Modela figuras e utilitários com o barro tirado da beira do rio Ipojuca.",
    cidade: "Caruaru, PE",
    regiaoId: "agreste",
  },
  {
    id: "usr_902",
    nome: "Maria de Lourdes",
    nomeLoja: "Linha de Passira",
    biografia:
      "Bordadeira desde os nove anos. Trabalha o ponto cheio e o richelieu em linho e algodão cru.",
    cidade: "Passira, PE",
    regiaoId: "agreste",
  },
  {
    id: "usr_903",
    nome: "Seu Damião",
    nomeLoja: "Carrancas do Velho Chico",
    biografia:
      "Entalha umburana e cedro à beira do São Francisco. Aprendeu o ofício nas barcas, com o pai.",
    cidade: "Petrolina, PE",
    regiaoId: "sertao-do-sao-francisco",
  },
  {
    id: "usr_904",
    nome: "Severino Gravador",
    nomeLoja: "Matriz de Bezerros",
    biografia:
      "Corta a madeira e imprime à mão, uma cópia por vez. Suas gravuras contam festas, bichos e histórias do Agreste.",
    cidade: "Bezerros, PE",
    regiaoId: "agreste",
  },
  {
    id: "usr_905",
    nome: "Ateliê Mãos da Mata",
    nomeLoja: "Ateliê Mãos da Mata",
    biografia:
      "Coletivo de seis ceramistas de Tracunhaém. Queimam em forno a lenha e pintam com engobes naturais.",
    cidade: "Tracunhaém, PE",
    regiaoId: "zona-da-mata",
  },
  {
    id: "usr_906",
    nome: "Zefa do Pajeú",
    nomeLoja: "Folhetos do Pajeú",
    biografia:
      "Poeta e cordelista. Escreve, ilustra e costura os próprios folhetos na terra dos repentistas.",
    cidade: "São José do Egito, PE",
    regiaoId: "sertao-do-pajeu",
  },
];
