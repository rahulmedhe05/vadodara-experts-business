import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior design consultation in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional interior design consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/interior-design-consultation-vadodara" },
  openGraph: {
    title: "Interior design consultation in Vadodara | VadodaraExperts",
    description: "Professional interior design consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/interior-design-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-design-consultation-vadodara" />;
}
