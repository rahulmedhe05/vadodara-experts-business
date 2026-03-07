import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "shop floor layout in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional shop floor layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/shop-floor-layout-vadodara" },
  openGraph: {
    title: "shop floor layout in Vadodara | VadodaraExperts",
    description: "Professional shop floor layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/shop-floor-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-floor-layout-vadodara" />;
}
