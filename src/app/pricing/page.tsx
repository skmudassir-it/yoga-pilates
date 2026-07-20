import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing & Memberships",
  description: "Flexible pricing for every practice. Drop-in, monthly unlimited, class packs, and annual memberships.",
};

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Pricing & Memberships</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Flexible options designed to fit your practice and your budget. Your first class is always free.</p>
          <div className="gradient-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`glass-card overflow-hidden relative ${plan.featured ? "ring-2 ring-primary" : ""}`}>
              {plan.badge && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className={plan.badge ? "pt-8" : ""}>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-3">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-primary mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full inline-flex">
                  <Button className="w-full gap-2" variant={plan.featured ? "default" : "outline"}>
                    Get Started <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which plan is right for you? Try a free class first.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
