import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "networking cabling fit out in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional networking cabling fit out services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/networking-cabling-fit-out-vadodara" },
  openGraph: {
    title: "networking cabling fit out in Vadodara | VadodaraExperts",
    description: "Professional networking cabling fit out services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/networking-cabling-fit-out-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="networking-cabling-fit-out-vadodara" />;
}
