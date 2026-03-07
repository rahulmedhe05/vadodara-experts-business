import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "destiny number in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional destiny number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/destiny-number-vadodara" },
  openGraph: {
    title: "destiny number in Vadodara | VadodaraExperts",
    description: "Professional destiny number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/destiny-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="destiny-number-vadodara" />;
}
