import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "industrial insulation services in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional industrial insulation services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/industrial-insulation-services-vadodara" },
  openGraph: {
    title: "industrial insulation services in Vadodara | VadodaraExperts",
    description: "Professional industrial insulation services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/industrial-insulation-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-insulation-services-vadodara" />;
}
