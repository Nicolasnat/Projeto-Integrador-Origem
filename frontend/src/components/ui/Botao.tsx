import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variante = "primario" | "secundario" | "contorno" | "fantasma";

const BASE =
  "inline-flex h-11 items-center justify-center gap-2 rounded-raio px-5 text-apoio font-bold whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTES: Record<Variante, string> = {
  primario: "bg-terracota text-white hover:bg-terracota-escura",
  secundario:
    "border border-borda-forte text-tinta-2 hover:border-tinta-3 hover:text-tinta",
  contorno:
    "border border-terracota bg-superficie text-terracota hover:bg-superficie-2",
  fantasma: "px-0 text-terracota hover:text-terracota-escura hover:underline",
};

type Comum = {
  variante?: Variante;
  larguraTotal?: boolean;
  children: ReactNode;
  className?: string;
};

type BotaoProps = Comum &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    carregando?: boolean;
  };

function classes(
  variante: Variante = "primario",
  larguraTotal?: boolean,
  className?: string,
) {
  return [BASE, VARIANTES[variante], larguraTotal && "w-full", className]
    .filter(Boolean)
    .join(" ");
}

export function Botao({
  variante,
  larguraTotal,
  carregando = false,
  className,
  children,
  disabled,
  type = "button",
  ...resto
}: BotaoProps) {
  return (
    <button
      type={type}
      disabled={disabled || carregando}
      aria-busy={carregando || undefined}
      className={classes(variante, larguraTotal, className)}
      {...resto}
    >
      {carregando && (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}

type BotaoLinkProps = Comum & { href: string };

export function BotaoLink({
  href,
  variante,
  larguraTotal,
  className,
  children,
}: BotaoLinkProps) {
  return (
    <Link
      href={href}
      className={classes(variante, larguraTotal, className)}
    >
      {children}
    </Link>
  );
}
