import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Turnkey construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional turnkey construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/turnkey-construction-vadodara" },
  openGraph: {
    title: "Turnkey construction in Vadodara | VadodaraExperts",
    description: "Professional turnkey construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/turnkey-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turnkey-construction-vadodara" />;
}
