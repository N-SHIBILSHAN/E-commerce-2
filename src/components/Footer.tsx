import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/shop?category=new" },
    { label: "Best Sellers", href: "/shop?sort=popular" },
    { label: "Accessories", href: "/shop?category=Accessories" },
    { label: "Jewelry", href: "/shop?category=Jewelry" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Craftsmanship", href: "/about#craftsmanship" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Press", href: "/press" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-wider text-primary inline-block mb-4"
            >
              MAISON
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Crafting timeless luxury pieces since 1987. Each creation embodies
              our commitment to exceptional craftsmanship and enduring elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Maison. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
