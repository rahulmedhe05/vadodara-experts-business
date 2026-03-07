import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "cold storage mechanical in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional cold storage mechanical services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/cold-storage-mechanical-vadodara" },
  openGraph: {
    title: "cold storage mechanical in Vadodara | VadodaraExperts",
    description: "Professional cold storage mechanical services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/cold-storage-mechanical-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-mechanical-vadodara" />;
}
