import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "marriage compatibility numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional marriage compatibility numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/marriage-compatibility-numerology-vadodara" },
  openGraph: {
    title: "marriage compatibility numerology in Vadodara | VadodaraExperts",
    description: "Professional marriage compatibility numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/marriage-compatibility-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marriage-compatibility-numerology-vadodara" />;
}
