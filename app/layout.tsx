import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Flowrush - Streamline Your Workflow",
  description:
    "The ultimate productivity tool to streamline your workflow and boost your efficiency.",
  keywords: "productivity, workflow, efficiency, automation, tools",
  authors: [{ name: "Flowrush Team" }],
  openGraph: {
    title: "Flowrush - Streamline Your Workflow",
    description:
      "The ultimate productivity tool to streamline your workflow and boost your efficiency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowrush - Streamline Your Workflow",
    description:
      "The ultimate productivity tool to streamline your workflow and boost your efficiency.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Header />
          <main>
            <Hero />
            {/* <Features /> */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
