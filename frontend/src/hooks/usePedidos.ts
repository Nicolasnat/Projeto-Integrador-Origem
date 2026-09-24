"use client";

import { useConsulta } from "@/hooks/useConsulta";
import { pedidosService } from "@/services/pedidos";

export function usePedidos() {
  return useConsulta("comprador-pedidos", () => pedidosService.listar());
}
