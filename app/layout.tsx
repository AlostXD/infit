import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infit - Consultoria Esportiva",
  description: "Tenha seu corpo dos sonhos com a Infit - Consultoria Esportiva Personalizada. Transforme seu corpo e alcance seus objetivos fitness com nossos planos personalizados, acompanhamento especializado e suporte dedicado. Junte-se à Infit hoje e comece sua jornada rumo a um estilo de vida mais saudável e ativo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
