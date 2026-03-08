import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "graha shanti puja in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional graha shanti puja services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/graha-shanti-puja-vadodara" },
  openGraph: {
    title: "graha shanti puja in Vadodara | VadodaraExperts",
    description: "Professional graha shanti puja services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/graha-shanti-puja-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="graha-shanti-puja-vadodara" />;
}
