"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";
import { Cart } from "./Cart";
import { useAuth } from "@clerk/nextjs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const { isSignedIn, signOut, user } = useAuth();

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold">Your Store</h1>
        
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" onClick={() => {
            const element = document.getElementById('latest-products');
            if (element) window.scrollTo(0, element.offsetTop);
          }}>
            Latest Products
          </Button>
          <Button variant="ghost" size="sm" onClick={() => {
            const element = document.getElementById('on-sale');
            if (element) window.scrollTo(0, element.offsetTop);
          }}>
            On Sale
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Admin
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => window.location.href = "/admin/page"}>
                Templates
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.location.href = "/admin/page"}>
                Products
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.location.href = "/admin/page"}>
                Orders
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-2 -right-2 bg-primary text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Button>
          {isSignedIn ? (
            <Button variant="ghost" size="sm" onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => window.location.href = "/sign-in"}>
              Sign In
            </Button>
          )}
        </div>
      </div>

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </nav>
  );
}