import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "lucky day in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional lucky day services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/lucky-day-vadodara" },
  openGraph: {
    title: "lucky day in Vadodara | VadodaraExperts",
    description: "Professional lucky day services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/lucky-day-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lucky-day-vadodara" />;
}
