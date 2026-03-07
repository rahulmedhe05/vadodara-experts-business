import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "24 hour plumber in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional 24 hour plumber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/24-hour-plumber-vadodara" },
  openGraph: {
    title: "24 hour plumber in Vadodara | VadodaraExperts",
    description: "Professional 24 hour plumber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/24-hour-plumber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="24-hour-plumber-vadodara" />;
}
