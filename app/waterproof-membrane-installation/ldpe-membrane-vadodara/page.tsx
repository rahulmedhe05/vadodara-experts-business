import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "LDPE membrane in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional ldpe membrane services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/ldpe-membrane-vadodara" },
  openGraph: {
    title: "LDPE membrane in Vadodara | VadodaraExperts",
    description: "Professional ldpe membrane services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/ldpe-membrane-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ldpe-membrane-vadodara" />;
}
