import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Death claim assistance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional death claim assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/death-claim-assistance-vadodara" },
  openGraph: {
    title: "Death claim assistance in Vadodara | VadodaraExperts",
    description: "Professional death claim assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/death-claim-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="death-claim-assistance-vadodara" />;
}
