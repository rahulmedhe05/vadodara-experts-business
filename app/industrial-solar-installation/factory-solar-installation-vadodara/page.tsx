import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "factory solar installation in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional factory solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/factory-solar-installation-vadodara" },
  openGraph: {
    title: "factory solar installation in Vadodara | VadodaraExperts",
    description: "Professional factory solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/factory-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-solar-installation-vadodara" />;
}
