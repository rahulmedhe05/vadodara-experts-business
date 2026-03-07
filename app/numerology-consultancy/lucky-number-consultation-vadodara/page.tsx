import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "lucky number consultation in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional lucky number consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/lucky-number-consultation-vadodara" },
  openGraph: {
    title: "lucky number consultation in Vadodara | VadodaraExperts",
    description: "Professional lucky number consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/lucky-number-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lucky-number-consultation-vadodara" />;
}
