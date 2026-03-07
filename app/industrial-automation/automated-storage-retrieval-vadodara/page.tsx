import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "automated storage retrieval in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional automated storage retrieval services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/automated-storage-retrieval-vadodara" },
  openGraph: {
    title: "automated storage retrieval in Vadodara | VadodaraExperts",
    description: "Professional automated storage retrieval services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/automated-storage-retrieval-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-storage-retrieval-vadodara" />;
}
