"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPage() {
  const [heroImage, setHeroImage] = useState("");

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
            type="text" 
            placeholder="Hero Image URL" 
            value={heroImage} 
            onChange={(e) => setHeroImage(e.target.value)} 
          />
          <Button onClick={() => alert(`Hero image updated to: ${heroImage}`)}>
            Update Hero Image
          </Button>
        </CardContent>
      </Card>
    </div>
  )
};