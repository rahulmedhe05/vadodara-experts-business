import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township solar power in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township solar power services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-solar-power-vadodara" },
  openGraph: {
    title: "township solar power in Vadodara | VadodaraExperts",
    description: "Professional township solar power services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-solar-power-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-solar-power-vadodara" />;
}
