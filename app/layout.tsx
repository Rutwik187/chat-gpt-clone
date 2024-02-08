import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider"

export const metadata: Metadata = {
  title: "Bubblspace",
  description: "Prototype of bubblspace",
};

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const session = await getServerSession()
  
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
      <SessionProvider session={session}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}

          
        </ThemeProvider>
          </SessionProvider>
      </body>
      <Toaster />
    </html>
  );
}
