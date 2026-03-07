import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "pipe fabrication in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional pipe fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/pipe-fabrication-vadodara" },
  openGraph: {
    title: "pipe fabrication in Vadodara | VadodaraExperts",
    description: "Professional pipe fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/pipe-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-fabrication-vadodara" />;
}
