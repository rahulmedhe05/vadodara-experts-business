import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Black ant treatment in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional black ant treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/black-ant-treatment-vadodara" },
  openGraph: {
    title: "Black ant treatment in Vadodara | VadodaraExperts",
    description: "Professional black ant treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/black-ant-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="black-ant-treatment-vadodara" />;
}
