import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <FeaturedProducts />
        
        {/* Collection Banner */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
                  The Art of Craft
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                  Exceptional Quality,
                  <br />
                  Uncompromising Standards
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every piece in our collection is a testament to the timeless art
                  of craftsmanship. From the selection of the finest materials to
                  the final stitch, our master artisans pour their expertise into
                  creating pieces that transcend trends and stand the test of time.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe luxury is not about ostentation—it's about the quiet
                  confidence that comes from owning something truly exceptional.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-[4/5] rounded overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
              Stay Connected
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Join Our World
            </h2>
            <p className="text-muted-foreground mb-8">
              Be the first to discover new collections, exclusive events, and
              insider access to the world of Maison.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
