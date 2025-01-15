"use client";

import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { useCart } from "./CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function FeaturedProducts() {
  const { isSignedIn } = useAuth();
  const [message, setMessage] = useState("");
  const { addItem } = useCart();

  const products = [
    {
      id: "1",
      name: "Headphones",
      price: 99.99,
      image: "/public/Screenshot 2025-01-14 182204.jpg",
      description: "latest"
    },
    {
      id: "2",
      name: "Mouse",
      price: 79.99,
      scr:"/public/Mouse.jpg",
      description: "sale"
    },
    // ...more products
  ];

  const handleAddToCart = (product) => {
    if (!isSignedIn) {
      setMessage("Please log in or sign up to add items to the cart.");
    } else {
      addItem(product);
      setMessage(`Added ${product.name} to the cart.`);
    }
  };

  const latestProducts = products.filter(product => product.description.includes("latest"));
  const onSaleProducts = products.filter(product => product.description.includes("sale"));

  return (
    <div className="p-4">
      <div id="latest-products" className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Latest Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((product) => (
            <Card key={product.id} className="p-4 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <p className="text-gray-600">${product.price}</p>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-2"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div id="on-sale" className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">On Sale</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {onSaleProducts.map((product) => (
            <Card key={product.id} className="p-4 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <p className="text-gray-600">${product.price}</p>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-2"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {message && (
        <div className="fixed p-4 text-white rounded-lg bottom-4 right-4 bg-black/80">
          {message}
        </div>
      )}
    </div>
  );
}