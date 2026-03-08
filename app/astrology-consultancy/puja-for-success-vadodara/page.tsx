import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "puja for success in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional puja for success services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/puja-for-success-vadodara" },
  openGraph: {
    title: "puja for success in Vadodara | VadodaraExperts",
    description: "Professional puja for success services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/puja-for-success-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="puja-for-success-vadodara" />;
}
