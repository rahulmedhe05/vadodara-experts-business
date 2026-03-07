import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "balcony drainage in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional balcony drainage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/balcony-drainage-vadodara" },
  openGraph: {
    title: "balcony drainage in Vadodara | VadodaraExperts",
    description: "Professional balcony drainage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/balcony-drainage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balcony-drainage-vadodara" />;
}
