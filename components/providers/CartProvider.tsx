// components/providers/CartProvider.tsx
import { CartProvider } from "@/app/(routes)/(store)/store/components/CartContext";

export default function CartProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}