import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Cold storage maintenance in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional cold storage maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/cold-storage-maintenance-vadodara" },
  openGraph: {
    title: "Cold storage maintenance in Vadodara | VadodaraExperts",
    description: "Professional cold storage maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/cold-storage-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-maintenance-vadodara" />;
}
