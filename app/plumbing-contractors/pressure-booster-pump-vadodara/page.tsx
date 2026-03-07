import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "pressure booster pump in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional pressure booster pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/pressure-booster-pump-vadodara" },
  openGraph: {
    title: "pressure booster pump in Vadodara | VadodaraExperts",
    description: "Professional pressure booster pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/pressure-booster-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pressure-booster-pump-vadodara" />;
}
