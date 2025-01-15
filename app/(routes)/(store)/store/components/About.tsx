"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About Urban Youths</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center">
              Urban Youths is a leading clothing and layering company dedicated to providing stylish and comfortable apparel for the modern youth. Our mission is to empower individuals through fashion, offering a wide range of clothing options that cater to diverse tastes and preferences.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded shadow">
                <p className="font-semibold">John Doe</p>
                <p>"Urban Youths has the best clothing options for layering. The quality is top-notch and the styles are always on point!"</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <p className="font-semibold">Jane Smith</p>
                <p>"I love shopping at Urban Youths. Their customer service is excellent and the clothes fit perfectly."</p>
              </div>
            </div>
        </CardContent>
        </Card>

        <Card>
        <CardHeader>
            <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>What is the return policy?</AccordionTrigger>
                <AccordionContent>
                We offer a 30-day return policy on all items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                  You can contact our customer support team via email at support@urbanyouths.com or by phone at (123) 456-7890.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}