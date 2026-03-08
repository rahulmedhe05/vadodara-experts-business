import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "pitra dosh remedy in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional pitra dosh remedy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/pitra-dosh-remedy-vadodara" },
  openGraph: {
    title: "pitra dosh remedy in Vadodara | VadodaraExperts",
    description: "Professional pitra dosh remedy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/pitra-dosh-remedy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pitra-dosh-remedy-vadodara" />;
}
