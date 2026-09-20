import { criarStore } from "@/store/criar-store";
import type { Sessao } from "@/types";

export const sessaoStore = criarStore<Sessao | null>(null);
