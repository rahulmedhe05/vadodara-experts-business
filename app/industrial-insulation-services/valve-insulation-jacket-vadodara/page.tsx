import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "valve insulation jacket in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional valve insulation jacket services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/valve-insulation-jacket-vadodara" },
  openGraph: {
    title: "valve insulation jacket in Vadodara | VadodaraExperts",
    description: "Professional valve insulation jacket services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/valve-insulation-jacket-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valve-insulation-jacket-vadodara" />;
}
