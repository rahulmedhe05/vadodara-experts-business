import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Mid century modern interior in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional mid century modern interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/mid-century-modern-interior-vadodara" },
  openGraph: {
    title: "Mid century modern interior in Vadodara | VadodaraExperts",
    description: "Professional mid century modern interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/mid-century-modern-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mid-century-modern-interior-vadodara" />;
}
