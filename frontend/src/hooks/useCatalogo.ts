"use client";

import { useConsulta } from "@/hooks/useConsulta";
import { catalogoService } from "@/services/catalogo";

export function useCategorias() {
  return useConsulta("categorias", (sinal) => catalogoService.categorias(sinal));
}

export function useTecnicas() {
  return useConsulta("tecnicas", (sinal) => catalogoService.tecnicas(sinal));
}

export function useRegioes() {
  return useConsulta("regioes", (sinal) => catalogoService.regioes(sinal));
}

export function useIndicadores() {
  return useConsulta("indicadores", (sinal) =>
    catalogoService.indicadores(sinal),
  );
}
