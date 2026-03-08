import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "gypsum false ceiling in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional gypsum false ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/gypsum-false-ceiling-vadodara" },
  openGraph: {
    title: "gypsum false ceiling in Vadodara | VadodaraExperts",
    description: "Professional gypsum false ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/gypsum-false-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gypsum-false-ceiling-vadodara" />;
}
