import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] mb-2 block">
              Curated Selection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Featured Pieces
            </h2>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0 p-0">
            <Link to="/shop" className="text-primary">
              View All Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className={`[animation-delay:${index * 100}ms]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
