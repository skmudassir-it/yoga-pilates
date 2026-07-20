import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Transformations",
  description: "Real results from real people. See how ZenFlow has transformed our community members' lives.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
