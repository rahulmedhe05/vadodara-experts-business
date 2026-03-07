import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "precision AC installation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional precision ac installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/precision-ac-installation-vadodara" },
  openGraph: {
    title: "precision AC installation in Vadodara | VadodaraExperts",
    description: "Professional precision ac installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/precision-ac-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="precision-ac-installation-vadodara" />;
}
