import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Mosquito larviciding in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional mosquito larviciding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/mosquito-larviciding-vadodara" },
  openGraph: {
    title: "Mosquito larviciding in Vadodara | VadodaraExperts",
    description: "Professional mosquito larviciding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/mosquito-larviciding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mosquito-larviciding-vadodara" />;
}
