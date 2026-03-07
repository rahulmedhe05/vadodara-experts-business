import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Design and build in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional design and build services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/design-and-build-vadodara" },
  openGraph: {
    title: "Design and build in Vadodara | VadodaraExperts",
    description: "Professional design and build services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/design-and-build-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="design-and-build-vadodara" />;
}
