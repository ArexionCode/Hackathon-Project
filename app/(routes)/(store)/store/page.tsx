import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { FeaturedProducts } from "./components/featured-products";

export default function StorePage() {
  return (
    <div className="flex-1">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
}