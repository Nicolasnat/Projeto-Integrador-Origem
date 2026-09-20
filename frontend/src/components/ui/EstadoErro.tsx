import { CloudOff } from "lucide-react";
import { Botao } from "@/components/ui/Botao";

export function EstadoErro({
  mensagem,
  aoTentarDeNovo,
}: {
  mensagem: string;
  aoTentarDeNovo: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-raio border border-borda bg-superficie px-6 py-10 text-center"
    >
      <CloudOff className="size-8 text-erro" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <p className="font-titulo text-h3 font-bold text-tinta">
          Não conseguimos carregar
        </p>
        <p className="text-apoio text-tinta-2">{mensagem}</p>
      </div>
      <Botao variante="contorno" onClick={aoTentarDeNovo}>
        Tentar de novo
      </Botao>
    </div>
  );
}
