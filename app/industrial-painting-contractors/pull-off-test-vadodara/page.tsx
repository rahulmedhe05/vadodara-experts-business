import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "pull off test in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional pull off test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/pull-off-test-vadodara" },
  openGraph: {
    title: "pull off test in Vadodara | VadodaraExperts",
    description: "Professional pull off test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/pull-off-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pull-off-test-vadodara" />;
}
