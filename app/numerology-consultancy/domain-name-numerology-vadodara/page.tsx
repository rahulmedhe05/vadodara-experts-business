import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "domain name numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional domain name numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/domain-name-numerology-vadodara" },
  openGraph: {
    title: "domain name numerology in Vadodara | VadodaraExperts",
    description: "Professional domain name numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/domain-name-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="domain-name-numerology-vadodara" />;
}
