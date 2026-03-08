import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior design portfolio in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional interior design portfolio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/interior-design-portfolio-vadodara" },
  openGraph: {
    title: "Interior design portfolio in Vadodara | VadodaraExperts",
    description: "Professional interior design portfolio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/interior-design-portfolio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-design-portfolio-vadodara" />;
}
