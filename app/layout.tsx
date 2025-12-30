import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "__TITLE_HERE__",
  description: "__DESCRIPTION_HERE__",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
