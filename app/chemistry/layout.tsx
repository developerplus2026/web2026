import type { ReactNode } from "react";

interface ChemistryLayoutProps {
  children: ReactNode;
}

export default function ChemistryLayout({ children }: ChemistryLayoutProps) {
  return <main className="min-h-screen">{children}</main>;
}
