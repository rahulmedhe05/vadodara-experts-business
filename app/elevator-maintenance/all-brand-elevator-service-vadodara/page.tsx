import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "all brand elevator service in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional all brand elevator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/all-brand-elevator-service-vadodara" },
  openGraph: {
    title: "all brand elevator service in Vadodara | VadodaraExperts",
    description: "Professional all brand elevator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/all-brand-elevator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="all-brand-elevator-service-vadodara" />;
}
