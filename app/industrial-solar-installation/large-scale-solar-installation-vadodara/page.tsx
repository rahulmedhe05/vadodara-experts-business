import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "large scale solar installation in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional large scale solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/large-scale-solar-installation-vadodara" },
  openGraph: {
    title: "large scale solar installation in Vadodara | VadodaraExperts",
    description: "Professional large scale solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/large-scale-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-scale-solar-installation-vadodara" />;
}
