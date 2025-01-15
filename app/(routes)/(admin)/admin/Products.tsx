"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function AdminPage() {
    const [products, setProducts] = useState([]);
}

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    

return (
    <div className="p-4">
    <Card className="mb-8">
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Product Name" />
          <Input type="number" placeholder="Product Price" />
          <Input type="text" placeholder="Product Image URL" />
          <Button onClick={() => handleAddProduct({ name: "New Product", price: 100, image: "/new-product.jpg" })}>
            Add Product
          </Button>
        </CardContent>
      </Card>
    </div>
);
};