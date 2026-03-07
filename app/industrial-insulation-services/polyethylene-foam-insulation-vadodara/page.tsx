import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "polyethylene foam insulation in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional polyethylene foam insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/polyethylene-foam-insulation-vadodara" },
  openGraph: {
    title: "polyethylene foam insulation in Vadodara | VadodaraExperts",
    description: "Professional polyethylene foam insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/polyethylene-foam-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polyethylene-foam-insulation-vadodara" />;
}
