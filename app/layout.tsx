import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./components/Page-wrapper";
import Navbar from "./components/Navbar";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Navbar/>
        <PageWrapper>
          
        {children}
        </PageWrapper>
        <div className="w-full lg:flex hidden h-full relative">

        <YouMayAlsoLike/>
        </div>

        </body>
    </html>
  );
}
