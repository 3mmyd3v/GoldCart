import { Inter } from "next/font/google";
import Nav from "@components/Nav/Nav";
// import './globals.css'

import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoldCart",
  description: "A Shopping Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
