import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/shop"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Collection
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-secondary rounded overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "w-20 h-24 rounded overflow-hidden border-2 transition-colors",
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <div className="mb-6">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <Separator className="my-6" />

              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-border rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Bag" : "Sold Out"}
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Complimentary shipping on all orders</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span>30-day returns & exchanges</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>2-year warranty on all pieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
