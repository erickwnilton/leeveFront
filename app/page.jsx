import React from "react";
import "../styles/global.css"

import { Header } from "@/components/header";
import { Main } from "@/components/main-session";
import { Second } from "@/components/second-session";
import { Third } from "@/components/third-session";
import { Fourth } from "@/components/fourth-session";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Leeve - Seu gerenciador online",
  description: "Gerencie seu empreendimento de forma simples e planejada",
  icons: { icon: ["leeve.svg"] }
}

export default function Page() {
  return (
    <html>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        <Header />
        <Main />
        <Second />
        <Third />
        <Fourth />
        <Footer />
      </body>
    </html>
  )
}