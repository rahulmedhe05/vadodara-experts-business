import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "industrial boiler cost in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional industrial boiler cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/industrial-boiler-cost-vadodara" },
  openGraph: {
    title: "industrial boiler cost in Vadodara | VadodaraExperts",
    description: "Professional industrial boiler cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/industrial-boiler-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-boiler-cost-vadodara" />;
}
