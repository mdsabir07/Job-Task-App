import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductsProvider } from "@/context/ProductsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobTask App",
  description: "A simple Next.js app for managing products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProductsProvider>
          <AuthProvider>
            <Navbar /> {/* ✅ Navbar at the top */}
            <main className="min-h-screen">{children}</main>
            <Footer /> {/* ✅ Footer at the bottom */}
          </AuthProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
