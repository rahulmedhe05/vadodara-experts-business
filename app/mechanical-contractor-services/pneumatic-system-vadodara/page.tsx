import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "pneumatic system in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional pneumatic system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/pneumatic-system-vadodara" },
  openGraph: {
    title: "pneumatic system in Vadodara | VadodaraExperts",
    description: "Professional pneumatic system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/pneumatic-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pneumatic-system-vadodara" />;
}
