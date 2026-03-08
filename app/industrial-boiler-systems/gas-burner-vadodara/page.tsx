import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "gas burner in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional gas burner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/gas-burner-vadodara" },
  openGraph: {
    title: "gas burner in Vadodara | VadodaraExperts",
    description: "Professional gas burner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/gas-burner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-burner-vadodara" />;
}
