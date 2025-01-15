// app/(routes)/(auth)/sign-in/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[400px] p-0">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-slate-900 hover:bg-slate-800",
              card: "shadow-none",
              headerSubtitle: "text-gray-600"
            },
            variables: {
              borderRadius: "0.5rem"
            }
          }}
          redirectUrl="/store"
          signUpUrl="/sign-up"
        />
      </Card>
    </div>
  );
}