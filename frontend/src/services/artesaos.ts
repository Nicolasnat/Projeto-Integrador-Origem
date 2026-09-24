import { http } from "@/lib/http";
import type { ArtesaoPerfil } from "@/types";

export const artesaosService = {
  perfil(id: string, sinal?: AbortSignal) {
    return http<ArtesaoPerfil>(`/artesaos/${encodeURIComponent(id)}/perfil`, {
      sinal,
    });
  },
};
