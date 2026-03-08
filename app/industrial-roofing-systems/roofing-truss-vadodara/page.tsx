import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roofing truss in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roofing truss services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-truss-vadodara" },
  openGraph: {
    title: "roofing truss in Vadodara | VadodaraExperts",
    description: "Professional roofing truss services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-truss-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-truss-vadodara" />;
}
