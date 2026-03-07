import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "PEB shed in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional peb shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/peb-shed-vadodara" },
  openGraph: {
    title: "PEB shed in Vadodara | VadodaraExperts",
    description: "Professional peb shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/peb-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peb-shed-vadodara" />;
}
