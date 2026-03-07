import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "hospital fit out in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional hospital fit out services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/hospital-fit-out-vadodara" },
  openGraph: {
    title: "hospital fit out in Vadodara | VadodaraExperts",
    description: "Professional hospital fit out services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/hospital-fit-out-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-fit-out-vadodara" />;
}
