import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "industrial shelving in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional industrial shelving services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/industrial-shelving-vadodara" },
  openGraph: {
    title: "industrial shelving in Vadodara | VadodaraExperts",
    description: "Professional industrial shelving services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/industrial-shelving-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-shelving-vadodara" />;
}
