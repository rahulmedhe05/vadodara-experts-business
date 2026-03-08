import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "single line diagram in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional single line diagram services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/single-line-diagram-vadodara" },
  openGraph: {
    title: "single line diagram in Vadodara | VadodaraExperts",
    description: "Professional single line diagram services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/single-line-diagram-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-line-diagram-vadodara" />;
}
