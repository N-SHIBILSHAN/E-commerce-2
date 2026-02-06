import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl tracking-wide">
            Shopping Bag
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="font-display text-lg mb-2">Your bag is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Discover our curated collection of luxury pieces.
            </p>
            <Button asChild onClick={() => setIsOpen(false)}>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-secondary rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm leading-tight">
                          {item.product.name}
                        </h4>
                        <p className="text-primary text-sm mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 -mt-1 -mr-2"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button asChild className="w-full" size="lg">
                <Link to="/checkout" onClick={() => setIsOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
