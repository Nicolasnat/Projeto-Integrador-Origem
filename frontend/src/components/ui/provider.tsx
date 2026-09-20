"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

// Mesmos tokens do DESIGN.md, para Drawer, Dialog e Toast saírem com a cara do resto.
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-lora), Georgia, serif" },
        body: { value: "var(--font-inter), system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "#f5f0e8" },
          panel: { value: "#fffdf8" },
          muted: { value: "#ede5d8" },
        },
        fg: {
          DEFAULT: { value: "#1a1a1a" },
          muted: { value: "#5a4f44" },
          subtle: { value: "#71685e" },
        },
        border: {
          DEFAULT: { value: "#d8ccbc" },
        },
        // Toast de sucesso e de erro nas cores "selo" e "erro".
        green: { solid: { value: "#174c3c" } },
        red: { solid: { value: "#c32822" } },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
