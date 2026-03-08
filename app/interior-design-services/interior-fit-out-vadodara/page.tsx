import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior fit out in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional interior fit out services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/interior-fit-out-vadodara" },
  openGraph: {
    title: "Interior fit out in Vadodara | VadodaraExperts",
    description: "Professional interior fit out services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/interior-fit-out-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-fit-out-vadodara" />;
}
