import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "AC ducting contractor in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional ac ducting contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/ac-ducting-contractor-vadodara" },
  openGraph: {
    title: "AC ducting contractor in Vadodara | VadodaraExperts",
    description: "Professional ac ducting contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/ac-ducting-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-ducting-contractor-vadodara" />;
}
