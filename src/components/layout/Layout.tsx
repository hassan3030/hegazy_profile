import { ReactNode } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}