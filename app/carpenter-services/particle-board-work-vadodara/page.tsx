import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Particle board work in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional particle board work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/particle-board-work-vadodara" },
  openGraph: {
    title: "Particle board work in Vadodara | VadodaraExperts",
    description: "Professional particle board work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/particle-board-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="particle-board-work-vadodara" />;
}
