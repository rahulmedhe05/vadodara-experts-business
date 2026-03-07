import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "DG synchronization in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional dg synchronization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/dg-synchronization-vadodara" },
  openGraph: {
    title: "DG synchronization in Vadodara | VadodaraExperts",
    description: "Professional dg synchronization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/dg-synchronization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-synchronization-vadodara" />;
}
