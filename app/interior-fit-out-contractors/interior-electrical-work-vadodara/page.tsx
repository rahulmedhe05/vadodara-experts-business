import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "interior electrical work in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional interior electrical work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/interior-electrical-work-vadodara" },
  openGraph: {
    title: "interior electrical work in Vadodara | VadodaraExperts",
    description: "Professional interior electrical work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/interior-electrical-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-electrical-work-vadodara" />;
}
