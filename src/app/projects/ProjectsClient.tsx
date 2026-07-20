"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/lib/data";

const categories = ["All", ...new Set(projects.map(p => p.category))];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } })
};

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Transformations</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Real stories. Real results. See how our community members have transformed their lives.</p>
          <div className="gradient-divider w-24 mx-auto mt-4" />
        </div>

        <Tabs value={filter} onValueChange={(v: string | null) => setFilter(v || "All")} className="mb-10">
          <TabsList className="flex-wrap justify-center bg-transparent gap-2">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="glass-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className="glass-card overflow-hidden h-full">
                <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faStar} className="size-16 text-primary/20" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="text-sm font-semibold text-primary">{project.result}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
