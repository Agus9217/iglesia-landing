import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Iglesia Cristiana en Barrio Nuevo",
  description: "Te invitamos a ser parte de nuestra iglesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
