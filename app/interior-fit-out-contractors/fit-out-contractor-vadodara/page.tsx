import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "fit out contractor in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional fit out contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-contractor-vadodara" },
  openGraph: {
    title: "fit out contractor in Vadodara | VadodaraExperts",
    description: "Professional fit out contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fit-out-contractor-vadodara" />;
}
