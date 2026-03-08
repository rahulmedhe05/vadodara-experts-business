import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "water purifier connection in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional water purifier connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/water-purifier-connection-vadodara" },
  openGraph: {
    title: "water purifier connection in Vadodara | VadodaraExperts",
    description: "Professional water purifier connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/water-purifier-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-purifier-connection-vadodara" />;
}
