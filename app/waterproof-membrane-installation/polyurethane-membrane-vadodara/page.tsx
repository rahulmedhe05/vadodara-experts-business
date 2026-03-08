import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "polyurethane membrane in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional polyurethane membrane services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/polyurethane-membrane-vadodara" },
  openGraph: {
    title: "polyurethane membrane in Vadodara | VadodaraExperts",
    description: "Professional polyurethane membrane services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/polyurethane-membrane-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polyurethane-membrane-vadodara" />;
}
