import { Destaques } from "@/components/vitrine/Destaques";
import { FaixaCategorias } from "@/components/vitrine/FaixaCategorias";
import { Hero } from "@/components/vitrine/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FaixaCategorias />
      <Destaques />
    </>
  );
}
