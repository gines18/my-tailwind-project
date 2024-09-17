import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from './Navbar';
import Footer from './Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body className={inter.className}>
        <div>
      <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
   
  );
}
