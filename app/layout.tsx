import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "./QueryClientProvider";
import Header from "@/components/header";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "StyleNest",
  description:
    "A fully functional e-commerce website for a mock e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <QueryClientProvider>
          <Header />
          <div className="bg-white mx-2 md:mx-4 rounded-md overflow-hidden">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
