import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "complete interior execution in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional complete interior execution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/complete-interior-execution-vadodara" },
  openGraph: {
    title: "complete interior execution in Vadodara | VadodaraExperts",
    description: "Professional complete interior execution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/complete-interior-execution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="complete-interior-execution-vadodara" />;
}
