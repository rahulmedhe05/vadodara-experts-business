import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Dengue mosquito control in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional dengue mosquito control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/dengue-mosquito-control-vadodara" },
  openGraph: {
    title: "Dengue mosquito control in Vadodara | VadodaraExperts",
    description: "Professional dengue mosquito control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/dengue-mosquito-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dengue-mosquito-control-vadodara" />;
}
