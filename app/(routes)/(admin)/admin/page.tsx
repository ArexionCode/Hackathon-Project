"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);


  const handleOrderProduct = (product) => {
    setOrders([...orders, product]);
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => handleOrderProduct({ name: "Ordered Product", price: 100 })}>
            Order Product
          </Button>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>{order.name} - ${order.price}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}