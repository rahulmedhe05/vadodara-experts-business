import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "spelling correction numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional spelling correction numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/spelling-correction-numerology-vadodara" },
  openGraph: {
    title: "spelling correction numerology in Vadodara | VadodaraExperts",
    description: "Professional spelling correction numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/spelling-correction-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spelling-correction-numerology-vadodara" />;
}
