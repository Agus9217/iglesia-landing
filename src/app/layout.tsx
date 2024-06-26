import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components";
import Providers from "./providers";
import { Container } from "@chakra-ui/react";

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
          <Container
            maxW={'1920px'}
            px={{ base: '0.8rem', md: '2rem' }}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
