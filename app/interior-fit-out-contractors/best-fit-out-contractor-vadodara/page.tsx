import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "best fit out contractor in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional best fit out contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/best-fit-out-contractor-vadodara" },
  openGraph: {
    title: "best fit out contractor in Vadodara | VadodaraExperts",
    description: "Professional best fit out contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/best-fit-out-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-fit-out-contractor-vadodara" />;
}
