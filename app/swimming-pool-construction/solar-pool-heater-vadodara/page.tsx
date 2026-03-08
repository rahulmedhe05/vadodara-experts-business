import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Solar pool heater in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional solar pool heater services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/solar-pool-heater-vadodara" },
  openGraph: {
    title: "Solar pool heater in Vadodara | VadodaraExperts",
    description: "Professional solar pool heater services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/solar-pool-heater-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-pool-heater-vadodara" />;
}
