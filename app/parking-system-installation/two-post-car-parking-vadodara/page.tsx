import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "two post car parking in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional two post car parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/two-post-car-parking-vadodara" },
  openGraph: {
    title: "two post car parking in Vadodara | VadodaraExperts",
    description: "Professional two post car parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/two-post-car-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="two-post-car-parking-vadodara" />;
}
