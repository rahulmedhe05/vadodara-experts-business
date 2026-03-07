import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Concealed piping work in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional concealed piping work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/concealed-piping-work-vadodara" },
  openGraph: {
    title: "Concealed piping work in Vadodara | VadodaraExperts",
    description: "Professional concealed piping work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/concealed-piping-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concealed-piping-work-vadodara" />;
}
