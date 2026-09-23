import Navbar from "@/components/layout/Navbar";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import MarketplaceCategories from "@/components/marketplace/MarketplaceCategories";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import MarketplaceToolbar from "@/components/marketplace/MarketplaceToolbar";
import ProductGrid from "@/components/marketplace/ProductGrid";
import MarketplacePagination from "@/components/marketplace/MarketplacePagination";
import MarketplaceBenefits from "@/components/marketplace/MarketplaceBenefits";
import Footer from "@/components/home/Footer";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#fafbf8] text-foreground">
      <Navbar />

      <MarketplaceHero />

      <MarketplaceCategories />

      <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-8 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[265px_1fr]">
          <MarketplaceFilters />

          <div>
            <MarketplaceToolbar />
            <ProductGrid />
            <MarketplacePagination />
          </div>
        </div>
      </section>

      <MarketplaceBenefits />

      <Footer />
    </main>
  );
}