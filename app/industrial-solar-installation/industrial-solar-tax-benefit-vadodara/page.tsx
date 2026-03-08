import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "industrial solar tax benefit in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional industrial solar tax benefit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/industrial-solar-tax-benefit-vadodara" },
  openGraph: {
    title: "industrial solar tax benefit in Vadodara | VadodaraExperts",
    description: "Professional industrial solar tax benefit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/industrial-solar-tax-benefit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-solar-tax-benefit-vadodara" />;
}
