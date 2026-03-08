import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "barrel vault roof in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional barrel vault roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/barrel-vault-roof-vadodara" },
  openGraph: {
    title: "barrel vault roof in Vadodara | VadodaraExperts",
    description: "Professional barrel vault roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/barrel-vault-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="barrel-vault-roof-vadodara" />;
}
