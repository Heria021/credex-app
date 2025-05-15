import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { ChatWidget } from "../components/ui/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Sell Your Unused Software Licenses",
  description: "SoftSell helps businesses sell their unused software licenses quickly and securely. Turn your idle software investments into cash today.",
  keywords: ["software licenses", "license marketplace", "sell software", "unused licenses", "SoftSell"],
  authors: [{ name: "SoftSell Team" }],
  openGraph: {
    title: "SoftSell - Sell Your Unused Software Licenses",
    description: "Turn your idle software investments into cash with SoftSell's secure marketplace.",
    url: "https://softsell.com",
    siteName: "SoftSell",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  applicationName: "SoftSell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
