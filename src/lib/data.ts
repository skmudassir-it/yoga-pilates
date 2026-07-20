import {
  faSpa, faPersonWalking, faMoon, faHeartPulse,
  faDumbbell, faCouch, faBrain, faBaby,
  faStar, faLeaf, faUsers, faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  duration: string;
  level: string;
}

export const services: Record<string, ServiceItem> = {
  "hatha-yoga": {
    slug: "hatha-yoga",
    title: "Hatha Yoga",
    tagline: "Build strength, flexibility, and inner calm",
    description: "Our foundational yoga practice combining physical postures (asanas) with breath work (pranayama) to create balance between body and mind.",
    longDescription: "Hatha Yoga is the foundation of all yoga styles, perfect for beginners and experienced practitioners alike. Each class focuses on holding postures with intention, developing body awareness, and cultivating a deep mind-body connection. Our instructors guide you through a carefully sequenced practice that builds strength, improves flexibility, and leaves you feeling centered and rejuvenated.",
    icon: faSpa,
    image: "/images/services/hatha-yoga.jpg",
    features: [
      "Classic asana practice with detailed alignment cues",
      "Pranayama (breathing techniques) integrated throughout",
      "Guided relaxation and meditation at the close",
      "Modifications offered for all levels",
      "Builds foundational strength and flexibility"
    ],
    duration: "60-75 minutes",
    level: "All Levels"
  },
  "vinyasa-flow": {
    slug: "vinyasa-flow",
    title: "Vinyasa Flow",
    tagline: "Move with breath, find your rhythm",
    description: "A dynamic, flowing practice that synchronizes breath with movement. Build heat, strength, and cardiovascular endurance.",
    longDescription: "Vinyasa Flow is a creative and energizing practice where postures are linked together in a flowing sequence. Each class is unique, guided by the instructor's creative vision and the energy of the room. Expect to move, sweat, and leave feeling both invigorated and deeply relaxed. Suitable for those with some yoga experience.",
    icon: faPersonWalking,
    image: "/images/services/vinyasa-flow.jpg",
    features: [
      "Creative sequencing that varies each class",
      "Sun salutations and standing flow series",
      "Peak pose progression for advanced practitioners",
      "Upbeat, energizing atmosphere",
      "Cardiovascular and strength benefits"
    ],
    duration: "60-75 minutes",
    level: "Intermediate"
  },
  "yin-yoga": {
    slug: "yin-yoga",
    title: "Yin Yoga",
    tagline: "Deep release for body and mind",
    description: "A slow-paced practice holding floor postures for extended periods, targeting deep connective tissues and promoting relaxation.",
    longDescription: "Yin Yoga works the deep connective tissues, joints, and fascia that other practices don't reach. Postures are held for 3-5 minutes, allowing gravity and time to do the work. This meditative practice teaches patience, presence, and surrender. Perfect for athletes, desk workers, and anyone seeking deep physical and mental release.",
    icon: faMoon,
    image: "/images/services/yin-yoga.jpg",
    features: [
      "Long-held floor postures (3-5 minutes)",
      "Targets fascia, ligaments, and joints",
      "Meditative and introspective atmosphere",
      "Excellent complement to active practices",
      "Props provided for optimal comfort"
    ],
    duration: "60 minutes",
    level: "All Levels"
  },
  "restorative-yoga": {
    slug: "restorative-yoga",
    title: "Restorative Yoga",
    tagline: "Rest, restore, and renew",
    description: "A deeply relaxing practice using props to fully support the body, allowing complete release of physical and mental tension.",
    longDescription: "Restorative Yoga is the ultimate self-care practice. Using bolsters, blankets, and blocks, each posture is fully supported so you can completely let go. This practice activates the parasympathetic nervous system, reducing stress and promoting healing. Ideal for those recovering from injury, managing stress, or simply needing deep rest.",
    icon: faCouch,
    image: "/images/services/restorative-yoga.jpg",
    features: [
      "Fully supported postures with props",
      "Activates relaxation response",
      "Reduces stress and anxiety",
      "Supports injury recovery",
      "Gentle and accessible for all bodies"
    ],
    duration: "60-75 minutes",
    level: "All Levels"
  },
  "mat-pilates": {
    slug: "mat-pilates",
    title: "Mat Pilates",
    tagline: "Core strength from the ground up",
    description: "A precise, controlled practice targeting deep core muscles, improving posture, and building full-body strength on the mat.",
    longDescription: "Mat Pilates focuses on the foundational principles of Pilates: concentration, control, centering, precision, flow, and breath. Using your body weight and small props, you'll strengthen the deep core muscles, improve spinal mobility, and develop a stronger, more balanced body. No equipment needed — just you and the mat.",
    icon: faDumbbell,
    image: "/images/services/mat-pilates.jpg",
    features: [
      "Core-focused strengthening exercises",
      "Improves posture and spinal alignment",
      "Small props: bands, balls, magic circles",
      "Low-impact, joint-friendly movement",
      "Builds lean muscle tone"
    ],
    duration: "55 minutes",
    level: "All Levels"
  },
  "reformer-pilates": {
    slug: "reformer-pilates",
    title: "Reformer Pilates",
    tagline: "Resistance training reimagined",
    description: "Spring-loaded resistance training on the Pilates Reformer for a full-body workout that lengthens, strengthens, and tones.",
    longDescription: "Reformer Pilates uses a specialized machine with springs, straps, and a sliding carriage to provide resistance and support. This versatile equipment allows for hundreds of exercises targeting every muscle group with precision. Our small class sizes (max 8) ensure personalized attention and proper form throughout your practice.",
    icon: faHeartPulse,
    image: "/images/services/reformer-pilates.jpg",
    features: [
      "Spring resistance for progressive loading",
      "Full-body workout on professional Reformers",
      "Small class sizes (max 8 students)",
      "Improves flexibility and joint mobility",
      "Suitable for rehab and athletic training"
    ],
    duration: "55 minutes",
    level: "All Levels"
  },
  "meditation": {
    slug: "meditation",
    title: "Meditation & Mindfulness",
    tagline: "Quiet the mind, awaken the spirit",
    description: "Guided meditation and mindfulness practices to reduce stress, improve focus, and cultivate inner peace in a supportive environment.",
    longDescription: "Our meditation classes offer a sanctuary from the noise of daily life. Through guided sessions, breath work, and mindfulness techniques, you'll learn to cultivate present-moment awareness and develop a sustainable meditation practice. Suitable for complete beginners and experienced meditators alike.",
    icon: faBrain,
    image: "/images/services/meditation.jpg",
    features: [
      "Guided sitting and walking meditation",
      "Breath awareness and body scan techniques",
      "Mindfulness for daily life integration",
      "Sound bath and chanting sessions available",
      "Reduce anxiety and improve sleep quality"
    ],
    duration: "30-45 minutes",
    level: "All Levels"
  },
  "prenatal-yoga": {
    slug: "prenatal-yoga",
    title: "Prenatal Yoga",
    tagline: "Nurture yourself and your baby",
    description: "Gentle, supportive yoga designed for expecting mothers. Build strength, ease discomfort, and prepare for childbirth with confidence.",
    longDescription: "Prenatal Yoga provides a safe, nurturing space for expecting mothers to connect with their changing bodies and growing babies. Classes focus on breathing techniques for labor, gentle strengthening, pelvic floor awareness, and relaxation. Build community with other mothers-to-be in a supportive, judgment-free environment.",
    icon: faBaby,
    image: "/images/services/prenatal-yoga.jpg",
    features: [
      "Safe poses modified for each trimester",
      "Breathing techniques for labor and delivery",
      "Pelvic floor strengthening and awareness",
      "Community support from fellow mothers",
      "Reduces pregnancy discomfort and stress"
    ],
    duration: "60 minutes",
    level: "Prenatal"
  }
};

export const serviceList = Object.values(services);

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  { name: "Sarah M.", role: "Member since 2023", quote: "ZenFlow completely changed my relationship with my body. The instructors are incredibly knowledgeable and the studio feels like a second home.", avatar: "/images/team/avatar-1.svg" },
  { name: "David K.", role: "Reformer Pilates Student", quote: "I came in with chronic back pain and within two months of Reformer classes, I'm pain-free and stronger than ever.", avatar: "/images/team/avatar-2.svg" },
  { name: "Maya L.", role: "Yoga & Meditation Member", quote: "The meditation classes helped me manage work stress in ways I never thought possible. I sleep better, focus better, and feel more present.", avatar: "/images/team/avatar-3.svg" },
  { name: "James R.", role: "Vinyasa Regular", quote: "Best Vinyasa classes in Portland. Every instructor brings something unique and I always leave feeling energized and centered.", avatar: "/images/team/avatar-4.svg" },
  { name: "Priya S.", role: "Prenatal Yoga Student", quote: "Practicing prenatal yoga here was the best decision I made during my pregnancy. The support and community were invaluable.", avatar: "/images/team/avatar-5.svg" },
];

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Drop-In",
    price: 22,
    period: "per class",
    description: "Perfect for occasional visitors and those trying out the studio.",
    features: ["Access to any regular class", "Mat and props provided", "No commitment required", "Valid for 30 days"],
    featured: false,
  },
  {
    name: "Monthly Unlimited",
    price: 129,
    period: "per month",
    description: "Best value for regular practitioners who want full access.",
    features: ["Unlimited yoga & pilates classes", "Priority booking for Reformer", "10% off workshops & retail", "One guest pass per month", "Free meditation sessions"],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "10-Class Pack",
    price: 189,
    period: "10 classes",
    description: "Flexibility with a discount for committed practitioners.",
    features: ["10 classes of your choice", "Valid for 90 days", "Includes Reformer sessions", "Mat and props provided", "Shareable with family"],
    featured: false,
  },
  {
    name: "Annual Membership",
    price: 1199,
    period: "per year",
    description: "Our best value for dedicated practitioners — two months free!",
    features: ["Everything in Monthly plan", "Two months free vs. monthly", "Free workshop admission", "Priority event registration", "Locker rental included"],
    featured: false,
  },
];

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  result: string;
}

export const projects: ProjectItem[] = [
  { title: "From Chronic Pain to Yoga Teacher", category: "Transformation", description: "Lisa arrived with debilitating lower back pain after years at a desk job. Through consistent Hatha and Restorative practice, she not only healed but completed her 200hr teacher training.", image: "/images/projects/project-1.jpg", result: "Pain-free and teaching" },
  { title: "Post-Injury Athletic Recovery", category: "Rehabilitation", description: "After a running injury sidelined marathoner Tom, our Reformer Pilates program rebuilt his core strength and corrected muscle imbalances that caused the injury.", image: "/images/projects/project-2.jpg", result: "Back to marathon training" },
  { title: "Stress to Serenity Program", category: "Wellness", description: "Corporate executive Jenna was burning out. Our 8-week Meditation & Yin Yoga protocol reduced her cortisol levels by 30% and improved her sleep quality dramatically.", image: "/images/projects/project-3.jpg", result: "30% stress reduction" },
  { title: "Prenatal to Postnatal Journey", category: "Motherhood", description: "Emily practiced Prenatal Yoga throughout her pregnancy and transitioned to Mat Pilates for postnatal recovery, reporting a smoother birth and faster recovery.", image: "/images/projects/project-4.jpg", result: "Empowered birth experience" },
  { title: "Flexibility Challenge Winner", category: "Achievement", description: "Mark couldn't touch his toes at 45. After 6 months of Vinyasa and Yin, he achieved full forward fold and discovered a passion for yoga he never expected.", image: "/images/projects/project-5.jpg", result: "Full range of motion" },
  { title: "Senior Strength & Balance", category: "Wellness", description: "At 72, Margaret was afraid of falling. Our gentle Hatha and Mat Pilates program improved her balance scores by 60% and gave her confidence back.", image: "/images/projects/project-6.jpg", result: "60% better balance" },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  certs: string;
}

export const team: TeamMember[] = [
  { name: "Anika Sharma", role: "Founder & Lead Instructor", bio: "ERYT-500 certified with 15+ years of teaching experience. Trained in India and the US, Anika brings a blend of traditional wisdom and modern science to every class.", image: "/images/team/team-1.jpg", certs: "ERYT-500, Reformer Certified" },
  { name: "Marcus Chen", role: "Pilates Director", bio: "STOTT PILATES fully certified instructor with a background in sports medicine. Marcus specializes in rehab-focused Pilates and athletic performance.", image: "/images/team/team-2.jpg", certs: "STOTT PILATES, NASM-CPT" },
  { name: "Luna Rivera", role: "Meditation & Yin Lead", bio: "Certified mindfulness teacher with training in MBSR and Tibetan Buddhist meditation. Luna's classes are known for their transformative, deeply restful quality.", image: "/images/team/team-3.jpg", certs: "MBSR Certified, 300hr YTT" },
  { name: "David Park", role: "Vinyasa Instructor", bio: "Former dancer turned yoga teacher. David's Vinyasa classes are creative, challenging, and infused with a deep understanding of anatomy and movement.", image: "/images/team/team-4.jpg", certs: "200hr YTT, Dance BFA" },
];
