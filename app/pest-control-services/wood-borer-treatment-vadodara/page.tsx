import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Wood borer treatment in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional wood borer treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/wood-borer-treatment-vadodara" },
  openGraph: {
    title: "Wood borer treatment in Vadodara | VadodaraExperts",
    description: "Professional wood borer treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/wood-borer-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-borer-treatment-vadodara" />;
}
