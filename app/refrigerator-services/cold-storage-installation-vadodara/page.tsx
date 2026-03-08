import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Cold storage installation in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional cold storage installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/cold-storage-installation-vadodara" },
  openGraph: {
    title: "Cold storage installation in Vadodara | VadodaraExperts",
    description: "Professional cold storage installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/cold-storage-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-installation-vadodara" />;
}
