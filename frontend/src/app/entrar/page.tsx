import type { Metadata } from "next";
import { FormularioLogin } from "@/components/conta/FormularioLogin";
import { PainelConta } from "@/components/conta/PainelConta";

export const metadata: Metadata = {
  title: "Entrar",
  description:
    "Entre na Origem para acompanhar seus pedidos e guardar as peças de que você gosta.",
};

export default function PaginaEntrar() {
  return (
    <PainelConta
      titulo="Entre na Origem"
      descricao="Acompanhe seus pedidos e continue de onde parou."
    >
      <FormularioLogin />
    </PainelConta>
  );
}
