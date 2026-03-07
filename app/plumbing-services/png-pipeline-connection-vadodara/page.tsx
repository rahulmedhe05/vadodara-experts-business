import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "PNG pipeline connection in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional png pipeline connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/png-pipeline-connection-vadodara" },
  openGraph: {
    title: "PNG pipeline connection in Vadodara | VadodaraExperts",
    description: "Professional png pipeline connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/png-pipeline-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="png-pipeline-connection-vadodara" />;
}
