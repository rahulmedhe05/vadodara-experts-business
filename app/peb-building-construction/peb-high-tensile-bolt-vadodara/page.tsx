import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB high tensile bolt in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional peb high tensile bolt services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/peb-high-tensile-bolt-vadodara" },
  openGraph: {
    title: "PEB high tensile bolt in Vadodara | VadodaraExperts",
    description: "Professional peb high tensile bolt services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/peb-high-tensile-bolt-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-high-tensile-bolt-vadodara" />;
}
