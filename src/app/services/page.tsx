import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serviceList } from "@/lib/data";

export const metadata: Metadata = {
  title: "Classes & Services",
  description: "Explore our full range of yoga, pilates, and meditation classes. From Hatha to Reformer Pilates — find your practice.",
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Classes & Services</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Every body is different. Find the practice that honors yours.</p>
          <div className="gradient-divider w-24 mx-auto mt-4" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="glass-card overflow-hidden h-full cursor-pointer group">
                <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={service.icon} className="size-20 text-primary/30 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{service.duration}</Badge>
                    <Badge variant="outline" className="text-xs">{service.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
