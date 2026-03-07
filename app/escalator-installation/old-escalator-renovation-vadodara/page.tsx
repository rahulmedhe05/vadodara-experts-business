import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Old escalator renovation in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional old escalator renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/old-escalator-renovation-vadodara" },
  openGraph: {
    title: "Old escalator renovation in Vadodara | VadodaraExperts",
    description: "Professional old escalator renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/old-escalator-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-escalator-renovation-vadodara" />;
}
