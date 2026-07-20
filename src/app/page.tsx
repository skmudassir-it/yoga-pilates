import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "ZenFlow Yoga & Pilates | Find Your Balance",
  description: "Expert-led yoga and pilates classes in Portland. Transform your body and mind.",
};

export default function HomePage() {
  return <HomeClient />;
}
