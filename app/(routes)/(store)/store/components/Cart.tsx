import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useCart } from "./CartContext";

interface CartProps {
  onClose: () => void;
}

export function Cart({ onClose }: CartProps) {
  const { items, removeItem, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={onClose}>
      <div 
        className="absolute right-4 top-16 w-96 bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6"
        onClick={e => e.stopPropagation()}
      >
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Cart</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity} × ${item.price}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="border-t mt-4 pt-4 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <Button onClick={clearCart} variant="outline">Clear Cart</Button>
                <Button>Checkout</Button>
              </div>
            </div>
          )}

          {items.length === 0 && (
            <p className="text-center text-gray-500 my-4">Your cart is empty</p>
          )}
        </Card>
      </div>
    </div>
  );
}