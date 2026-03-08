import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "HVAC duct work interior in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional hvac duct work interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/hvac-duct-work-interior-vadodara" },
  openGraph: {
    title: "HVAC duct work interior in Vadodara | VadodaraExperts",
    description: "Professional hvac duct work interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/hvac-duct-work-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-duct-work-interior-vadodara" />;
}
