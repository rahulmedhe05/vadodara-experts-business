import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "oil burner in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional oil burner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/oil-burner-vadodara" },
  openGraph: {
    title: "oil burner in Vadodara | VadodaraExperts",
    description: "Professional oil burner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/oil-burner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oil-burner-vadodara" />;
}
