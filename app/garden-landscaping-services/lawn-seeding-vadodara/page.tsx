import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Lawn seeding in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional lawn seeding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/lawn-seeding-vadodara" },
  openGraph: {
    title: "Lawn seeding in Vadodara | VadodaraExperts",
    description: "Professional lawn seeding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/lawn-seeding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lawn-seeding-vadodara" />;
}
