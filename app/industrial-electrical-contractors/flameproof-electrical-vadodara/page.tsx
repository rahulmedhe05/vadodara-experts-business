import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "flameproof electrical in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional flameproof electrical services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/flameproof-electrical-vadodara" },
  openGraph: {
    title: "flameproof electrical in Vadodara | VadodaraExperts",
    description: "Professional flameproof electrical services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/flameproof-electrical-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flameproof-electrical-vadodara" />;
}
