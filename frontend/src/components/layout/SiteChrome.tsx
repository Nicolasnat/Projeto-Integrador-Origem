"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/painel/admin") return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/painel/admin") return null;
  return <Footer />;
}
