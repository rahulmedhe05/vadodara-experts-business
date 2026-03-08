import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "name number calculation in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional name number calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/name-number-calculation-vadodara" },
  openGraph: {
    title: "name number calculation in Vadodara | VadodaraExperts",
    description: "Professional name number calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/name-number-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="name-number-calculation-vadodara" />;
}
