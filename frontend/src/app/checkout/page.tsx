import type { Metadata } from "next";
import { FluxoCheckout } from "@/components/checkout/FluxoCheckout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Informe a entrega e conclua o pagamento da sua compra.",
};

export default function PaginaCheckout() {
  return <FluxoCheckout />;
}
