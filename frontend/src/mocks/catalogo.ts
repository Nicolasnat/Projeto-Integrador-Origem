// Dados da Fake API. Só src/app/api importa daqui.
import type { Categoria, Regiao, Tecnica } from "@/types";

export const categorias: Categoria[] = [
  { id: "artesanato", nome: "Artesanato" },
  { id: "literatura", nome: "Literatura" },
  { id: "arte-e-decoracao", nome: "Arte e Decoração" },
];

export const tecnicas: Tecnica[] = [
  { id: "ceramica", nome: "Cerâmica" },
  { id: "entalhe-em-madeira", nome: "Entalhe em madeira" },
  { id: "xilogravura", nome: "Xilogravura" },
  { id: "bordado", nome: "Bordado" },
  { id: "renda-renascenca", nome: "Renda renascença" },
  { id: "cordel", nome: "Cordel" },
];

export const regioes: Regiao[] = [
  { id: "metropolitana", nome: "Região Metropolitana" },
  { id: "zona-da-mata", nome: "Zona da Mata" },
  { id: "agreste", nome: "Agreste" },
  { id: "sertao-do-pajeu", nome: "Sertão do Pajeú" },
  { id: "sertao-do-sao-francisco", nome: "Sertão do São Francisco" },
];
