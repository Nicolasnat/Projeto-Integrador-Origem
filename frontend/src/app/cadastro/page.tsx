import type { Metadata } from "next";
import { FormularioCadastro } from "@/components/conta/FormularioCadastro";
import { PainelConta } from "@/components/conta/PainelConta";

export const metadata: Metadata = {
  title: "Criar conta",
  description:
    "Crie sua conta na Origem para comprar direto de artesãos de Pernambuco ou vender as suas peças.",
};

export default function PaginaCadastro() {
  return (
    <PainelConta
      titulo="Crie sua conta"
      descricao="Leva um minuto. Você pode comprar, vender, ou os dois."
    >
      <FormularioCadastro />
    </PainelConta>
  );
}
