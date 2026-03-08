import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Office partition in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional office partition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/office-partition-vadodara" },
  openGraph: {
    title: "Office partition in Vadodara | VadodaraExperts",
    description: "Professional office partition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/office-partition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-partition-vadodara" />;
}
