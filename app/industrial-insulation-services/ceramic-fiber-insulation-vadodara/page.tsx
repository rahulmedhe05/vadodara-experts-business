import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "ceramic fiber insulation in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional ceramic fiber insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/ceramic-fiber-insulation-vadodara" },
  openGraph: {
    title: "ceramic fiber insulation in Vadodara | VadodaraExperts",
    description: "Professional ceramic fiber insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/ceramic-fiber-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceramic-fiber-insulation-vadodara" />;
}
