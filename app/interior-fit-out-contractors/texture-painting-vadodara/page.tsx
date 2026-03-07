import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "texture painting in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional texture painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/texture-painting-vadodara" },
  openGraph: {
    title: "texture painting in Vadodara | VadodaraExperts",
    description: "Professional texture painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/texture-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="texture-painting-vadodara" />;
}
