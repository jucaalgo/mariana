import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manual Interactivo - Licencia 2-14 Florida",
  description: "Plataforma educativa para la licencia de seguros 2-14 en Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${font.className} bg-slate-50 text-slate-900 flex flex-col md:flex-row h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 overflow-y-auto w-full p-4 md:p-8 pb-20 md:pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}
