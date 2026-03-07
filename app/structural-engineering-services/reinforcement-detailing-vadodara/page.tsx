import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Reinforcement detailing in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional reinforcement detailing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/reinforcement-detailing-vadodara" },
  openGraph: {
    title: "Reinforcement detailing in Vadodara | VadodaraExperts",
    description: "Professional reinforcement detailing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/reinforcement-detailing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reinforcement-detailing-vadodara" />;
}
