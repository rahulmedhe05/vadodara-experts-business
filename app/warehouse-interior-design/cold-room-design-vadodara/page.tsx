import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "cold room design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional cold room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/cold-room-design-vadodara" },
  openGraph: {
    title: "cold room design in Vadodara | VadodaraExperts",
    description: "Professional cold room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/cold-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-room-design-vadodara" />;
}
