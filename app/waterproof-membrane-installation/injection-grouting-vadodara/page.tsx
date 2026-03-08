import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "injection grouting in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional injection grouting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/injection-grouting-vadodara" },
  openGraph: {
    title: "injection grouting in Vadodara | VadodaraExperts",
    description: "Professional injection grouting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/injection-grouting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="injection-grouting-vadodara" />;
}
