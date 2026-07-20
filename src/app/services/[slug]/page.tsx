import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return notFound();

  const otherServices = Object.values(services).filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex mb-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
            </Button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-0">{service.level}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{service.tagline}</p>
              <p className="mb-6 leading-relaxed">{service.longDescription}</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FontAwesomeIcon icon={faClock} className="size-4" /> {service.duration}
                </div>
              </div>
              <Link href="/contact" className="inline-flex">
                <Button size="lg">Book a Session</Button>
              </Link>
            </div>
            <div className="glass-card p-2">
              <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="size-32 text-primary/25" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More Classes</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card className="glass-card overflow-hidden cursor-pointer group h-full">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <FontAwesomeIcon icon={s.icon} className="size-12 text-primary/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{s.tagline}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
