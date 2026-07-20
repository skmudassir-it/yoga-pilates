"use client";

import Link from "next/link";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck, faLeaf, faQuoteLeft, faSpa, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { serviceList, testimonials } from "@/lib/data";

const stats = [
  { icon: faUsers, value: "2,500+", label: "Active Members" },
  { icon: faCalendarCheck, value: "40+", label: "Weekly Classes" },
  { icon: faLeaf, value: "15+", label: "Expert Instructors" },
  { icon: faSpa, value: "8+", label: "Years of Excellence" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const }
  })
};

export default function HomeClient() {
  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, var(--primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">Portland's Premier Yoga Studio</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Your <span className="text-primary">Balance</span>. Transform Your <span className="text-secondary">Life</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert-led yoga, pilates, and meditation classes designed for every body. From gentle restorative sessions to dynamic Vinyasa flows — discover the practice that moves you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Explore Classes <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
              <Link href="/pricing" className="inline-flex">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={stats.indexOf(stat)}
              >
                <FontAwesomeIcon icon={stat.icon} className="size-6 text-primary mb-2" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Our Classes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From dynamic flows to deep restoration — find the practice that fits your body and your goals.</p>
            <div className="gradient-divider w-24 mx-auto mt-4" />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceList.slice(0, 8).map((service, i) => (
              <motion.div key={service.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="glass-card overflow-hidden h-full cursor-pointer group">
                    <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                      <FontAwesomeIcon icon={service.icon} className="size-16 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">{service.duration}</Badge>
                        <Badge variant="outline" className="text-xs">{service.level}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-bold tracking-tight mb-3">What Our Community Says</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real stories from real people who found their practice at ZenFlow.</p>
            <div className="gradient-divider w-24 mx-auto mt-4" />
          </motion.div>
          <Carousel plugins={[autoplayPlugin.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full">
                    <FontAwesomeIcon icon={faQuoteLeft} className="size-6 text-primary/30 mb-3" />
                    <p className="text-sm mb-4 leading-relaxed">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="glass-card p-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl font-bold mb-3">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground mb-6">Your first class is on us. Experience the ZenFlow difference with a complimentary session.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Claim Your Free Class <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
              <Link href="/pricing" className="inline-flex">
                <Button variant="outline" size="lg">See Memberships</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
