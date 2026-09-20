import { http } from "@/lib/http";
import type { Categoria, IndicadoresVitrine, Regiao, Tecnica } from "@/types";

export const catalogoService = {
  categorias(sinal?: AbortSignal) {
    return http<Categoria[]>("/categorias", { sinal });
  },

  tecnicas(sinal?: AbortSignal) {
    return http<Tecnica[]>("/tecnicas", { sinal });
  },

  regioes(sinal?: AbortSignal) {
    return http<Regiao[]>("/regioes", { sinal });
  },

  indicadores(sinal?: AbortSignal) {
    return http<IndicadoresVitrine>("/indicadores", { sinal });
  },
};
