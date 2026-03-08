import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "container house rainwater harvesting in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional container house rainwater harvesting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/container-house-rainwater-harvesting-vadodara" },
  openGraph: {
    title: "container house rainwater harvesting in Vadodara | VadodaraExperts",
    description: "Professional container house rainwater harvesting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/container-house-rainwater-harvesting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-house-rainwater-harvesting-vadodara" />;
}
