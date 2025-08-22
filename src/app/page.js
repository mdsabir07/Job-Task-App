import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductHighlights from "@/components/ProductHighlights";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ProductHighlights />
      </main>
      <Footer />
    </>
  );
}
