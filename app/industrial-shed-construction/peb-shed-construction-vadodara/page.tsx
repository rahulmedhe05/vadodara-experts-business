import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "PEB shed construction in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional peb shed construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/peb-shed-construction-vadodara" },
  openGraph: {
    title: "PEB shed construction in Vadodara | VadodaraExperts",
    description: "Professional peb shed construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/peb-shed-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-shed-construction-vadodara" />;
}
