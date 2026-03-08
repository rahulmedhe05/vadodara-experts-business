import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "lucky vehicle number in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional lucky vehicle number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/lucky-vehicle-number-vadodara" },
  openGraph: {
    title: "lucky vehicle number in Vadodara | VadodaraExperts",
    description: "Professional lucky vehicle number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/lucky-vehicle-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lucky-vehicle-number-vadodara" />;
}
