import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "VMC water connection in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional vmc water connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/vmc-water-connection-vadodara" },
  openGraph: {
    title: "VMC water connection in Vadodara | VadodaraExperts",
    description: "Professional vmc water connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/vmc-water-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vmc-water-connection-vadodara" />;
}
