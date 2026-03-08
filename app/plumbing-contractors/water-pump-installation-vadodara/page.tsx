import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "water pump installation in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional water pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/water-pump-installation-vadodara" },
  openGraph: {
    title: "water pump installation in Vadodara | VadodaraExperts",
    description: "Professional water pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/water-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-pump-installation-vadodara" />;
}
