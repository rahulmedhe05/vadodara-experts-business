import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "cassette AC installation in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional cassette ac installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/cassette-ac-installation-vadodara" },
  openGraph: {
    title: "cassette AC installation in Vadodara | VadodaraExperts",
    description: "Professional cassette ac installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/cassette-ac-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cassette-ac-installation-vadodara" />;
}
