import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "fit out contractor near me in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional fit out contractor near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-contractor-near-me-vadodara" },
  openGraph: {
    title: "fit out contractor near me in Vadodara | VadodaraExperts",
    description: "Professional fit out contractor near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-contractor-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fit-out-contractor-near-me-vadodara" />;
}
