import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "rahu ketu dosh remedy in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional rahu ketu dosh remedy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/rahu-ketu-dosh-remedy-vadodara" },
  openGraph: {
    title: "rahu ketu dosh remedy in Vadodara | VadodaraExperts",
    description: "Professional rahu ketu dosh remedy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/rahu-ketu-dosh-remedy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rahu-ketu-dosh-remedy-vadodara" />;
}
