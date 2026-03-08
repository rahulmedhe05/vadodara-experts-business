import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "dock leveller installation in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional dock leveller installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/dock-leveller-installation-vadodara" },
  openGraph: {
    title: "dock leveller installation in Vadodara | VadodaraExperts",
    description: "Professional dock leveller installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/dock-leveller-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dock-leveller-installation-vadodara" />;
}
