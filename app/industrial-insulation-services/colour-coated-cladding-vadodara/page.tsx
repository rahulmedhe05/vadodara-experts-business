import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "colour coated cladding in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional colour coated cladding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/colour-coated-cladding-vadodara" },
  openGraph: {
    title: "colour coated cladding in Vadodara | VadodaraExperts",
    description: "Professional colour coated cladding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/colour-coated-cladding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="colour-coated-cladding-vadodara" />;
}
