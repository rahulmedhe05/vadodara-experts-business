import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "banking solar power in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional banking solar power services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/banking-solar-power-vadodara" },
  openGraph: {
    title: "banking solar power in Vadodara | VadodaraExperts",
    description: "Professional banking solar power services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/banking-solar-power-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="banking-solar-power-vadodara" />;
}
