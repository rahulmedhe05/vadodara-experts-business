import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Powder post beetle treatment in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional powder post beetle treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/powder-post-beetle-treatment-vadodara" },
  openGraph: {
    title: "Powder post beetle treatment in Vadodara | VadodaraExperts",
    description: "Professional powder post beetle treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/powder-post-beetle-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="powder-post-beetle-treatment-vadodara" />;
}
