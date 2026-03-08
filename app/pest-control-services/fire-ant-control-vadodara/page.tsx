import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Fire ant control in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional fire ant control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/fire-ant-control-vadodara" },
  openGraph: {
    title: "Fire ant control in Vadodara | VadodaraExperts",
    description: "Professional fire ant control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/fire-ant-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-ant-control-vadodara" />;
}
