import { paintings, getAllCategories } from "@/data/paintings";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const categories = getAllCategories();
  const featuredPainting = paintings.find((p) => p.featured);

  return (
    <>
      <Header />
      <main>
        <Hero featuredImage={featuredPainting?.image} />
        <Gallery paintings={paintings} categories={categories} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
