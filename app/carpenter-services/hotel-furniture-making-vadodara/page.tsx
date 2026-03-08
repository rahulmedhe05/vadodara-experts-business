import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Hotel furniture making in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional hotel furniture making services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/hotel-furniture-making-vadodara" },
  openGraph: {
    title: "Hotel furniture making in Vadodara | VadodaraExperts",
    description: "Professional hotel furniture making services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/hotel-furniture-making-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-furniture-making-vadodara" />;
}
