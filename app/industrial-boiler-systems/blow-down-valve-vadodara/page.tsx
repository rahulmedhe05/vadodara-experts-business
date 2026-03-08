import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "blow down valve in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional blow down valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/blow-down-valve-vadodara" },
  openGraph: {
    title: "blow down valve in Vadodara | VadodaraExperts",
    description: "Professional blow down valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/blow-down-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blow-down-valve-vadodara" />;
}
