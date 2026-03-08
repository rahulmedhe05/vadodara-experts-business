import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "single headed hydrant in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional single headed hydrant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/single-headed-hydrant-vadodara" },
  openGraph: {
    title: "single headed hydrant in Vadodara | VadodaraExperts",
    description: "Professional single headed hydrant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/single-headed-hydrant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-headed-hydrant-vadodara" />;
}
