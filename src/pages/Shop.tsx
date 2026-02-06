import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              The Collection
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Explore our curated selection of luxury pieces, each crafted with
              exceptional attention to detail.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={`[animation-delay:${index * 50}ms]`}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
