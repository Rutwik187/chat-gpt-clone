import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "Bubblspace",
  description: "Prototype of bubblspace",
};

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </body>
      <Toaster />
    </html>
  );
}
