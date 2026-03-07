import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Mosquito fogging in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional mosquito fogging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/mosquito-fogging-vadodara" },
  openGraph: {
    title: "Mosquito fogging in Vadodara | VadodaraExperts",
    description: "Professional mosquito fogging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/mosquito-fogging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mosquito-fogging-vadodara" />;
}
