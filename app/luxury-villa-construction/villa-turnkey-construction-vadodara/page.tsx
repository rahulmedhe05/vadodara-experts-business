import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa turnkey construction in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa turnkey construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-turnkey-construction-vadodara" },
  openGraph: {
    title: "villa turnkey construction in Vadodara | VadodaraExperts",
    description: "Professional villa turnkey construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-turnkey-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-turnkey-construction-vadodara" />;
}
