import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "mechanical electrical plumbing in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional mechanical electrical plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-electrical-plumbing-vadodara" },
  openGraph: {
    title: "mechanical electrical plumbing in Vadodara | VadodaraExperts",
    description: "Professional mechanical electrical plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-electrical-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-electrical-plumbing-vadodara" />;
}
