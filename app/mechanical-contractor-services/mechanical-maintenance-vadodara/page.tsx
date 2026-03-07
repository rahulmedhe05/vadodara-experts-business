import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "mechanical maintenance in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional mechanical maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-maintenance-vadodara" },
  openGraph: {
    title: "mechanical maintenance in Vadodara | VadodaraExperts",
    description: "Professional mechanical maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-maintenance-vadodara" />;
}
