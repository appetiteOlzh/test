import cn from "classnames";

import { gilroy, sfpro } from "../fonts";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" dir="ltr" className="scroll-smooth">
      <body className={cn("antialiased", gilroy.variable, sfpro.variable)}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
