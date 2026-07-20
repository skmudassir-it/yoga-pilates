import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the ZenFlow team. We're passionate about bringing yoga, pilates, and mindfulness to the Portland community.",
};

const values = [
  { icon: faHeart, title: "Inclusivity", description: "Every body is welcome here. We create a judgment-free space where all levels, ages, and abilities can thrive." },
  { icon: faLeaf, title: "Mindful Growth", description: "We believe in progress over perfection. Each practice is an opportunity to learn, grow, and deepen self-awareness." },
  { icon: faUsers, title: "Community First", description: "ZenFlow is more than a studio — it's a community. We foster connection through shared practice and mutual support." },
  { icon: faStar, title: "Excellence", description: "Our instructors are rigorously trained, continuously educated, and deeply passionate about their craft." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              ZenFlow was born from a simple belief: that movement, breath, and mindfulness can transform lives. Founded in 2018 by Anika Sharma, we've grown from a small neighborhood studio to Portland's most beloved wellness community.
            </p>
            <div className="gradient-divider w-24 mx-auto mt-6" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-2">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                  <CardDescription>{v.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="glass-card overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>
                    <div className="font-medium text-sm text-foreground">{member.role}</div>
                    <div className="text-xs mt-1">{member.certs}</div>
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
