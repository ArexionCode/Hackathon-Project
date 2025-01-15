"use client";

import { SignUp } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

export const dynamic = 'force-dynamic';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-[400px] p-0">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-slate-900 hover:bg-slate-800",
              card: "shadow-none",
            },
          }}
          redirectUrl="/store"
        />
      </Card>
    </div>
  );
}