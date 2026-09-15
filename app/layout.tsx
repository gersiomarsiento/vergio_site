import type { Metadata } from "next";
import { DM_Sans, Manrope, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Vergio Digital — Ideas claras. Mejores resultados.",
  description: "Estrategia, diseño y desarrollo digital.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-title" content="Vergio Digital" />
      </head>
      <body
        className={`${dmSans.variable} ${manrope.variable} ${montserrat.variable} ${bebas.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
