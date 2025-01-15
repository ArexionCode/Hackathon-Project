"use client";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/app/(routes)/(store)/store/components/CartContext";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}