"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

const interests = [
  "Hatha Yoga", "Vinyasa Flow", "Yin Yoga", "Restorative Yoga",
  "Mat Pilates", "Reformer Pilates", "Meditation", "Prenatal Yoga",
  "Private Session", "Not Sure — Help Me Choose"
];

const contactInfo = [
  { icon: faLocationDot, label: "Address", value: "742 Serenity Lane, Portland, OR 97201" },
  { icon: faPhone, label: "Phone", value: "(503) 555-0142" },
  { icon: faEnvelope, label: "Email", value: "hello@zenflowstudio.com" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {}
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-4 text-center">
          <motion.div className="glass-card p-10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
            <p className="text-muted-foreground mb-6">We've received your message and will get back to you within 24 hours. Your first class is on us!</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Ready to begin? Drop us a line and we'll help you find the perfect class.</p>
          <div className="gradient-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-card p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <Input {...register("name")} placeholder="Your name" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <Input {...register("email")} type="email" placeholder="you@email.com" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <Input {...register("phone")} placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Interest *</label>
                    <Select onValueChange={(v: string | null) => setValue("interest", v || "")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest..." />
                      </SelectTrigger>
                      <SelectContent>
                        {interests.map((i) => (
                          <SelectItem key={i} value={i}>{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.interest && <p className="text-xs text-destructive mt-1">{errors.interest.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <Textarea {...register("message")} placeholder="Tell us about your goals, experience, or any questions..." rows={4} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="gap-2" disabled={isSubmitting}>
                  <FontAwesomeIcon icon={faPaperPlane} className="size-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.label} className="glass-card">
                <CardContent className="flex items-start gap-3 pt-4">
                  <FontAwesomeIcon icon={info.icon} className="size-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">{info.label}</div>
                    <div className="text-sm text-muted-foreground">{info.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base">Studio Hours</CardTitle>
                <CardDescription>
                  <div className="space-y-1 mt-2">
                    <div className="flex justify-between text-sm"><span>Mon–Fri</span><span>6 AM – 9 PM</span></div>
                    <div className="flex justify-between text-sm"><span>Saturday</span><span>7 AM – 7 PM</span></div>
                    <div className="flex justify-between text-sm"><span>Sunday</span><span>8 AM – 6 PM</span></div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
