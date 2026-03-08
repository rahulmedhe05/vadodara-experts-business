import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "PEB shed for lease in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional peb shed for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/peb-shed-for-lease-vadodara" },
  openGraph: {
    title: "PEB shed for lease in Vadodara | VadodaraExperts",
    description: "Professional peb shed for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/peb-shed-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-shed-for-lease-vadodara" />;
}
