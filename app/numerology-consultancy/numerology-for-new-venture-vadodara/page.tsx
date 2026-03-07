import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "numerology for new venture in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional numerology for new venture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/numerology-for-new-venture-vadodara" },
  openGraph: {
    title: "numerology for new venture in Vadodara | VadodaraExperts",
    description: "Professional numerology for new venture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/numerology-for-new-venture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="numerology-for-new-venture-vadodara" />;
}
