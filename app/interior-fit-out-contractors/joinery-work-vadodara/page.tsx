import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "joinery work in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional joinery work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/joinery-work-vadodara" },
  openGraph: {
    title: "joinery work in Vadodara | VadodaraExperts",
    description: "Professional joinery work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/joinery-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joinery-work-vadodara" />;
}
