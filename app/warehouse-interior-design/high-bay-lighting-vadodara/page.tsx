import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "high bay lighting in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional high bay lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/high-bay-lighting-vadodara" },
  openGraph: {
    title: "high bay lighting in Vadodara | VadodaraExperts",
    description: "Professional high bay lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/high-bay-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-bay-lighting-vadodara" />;
}
