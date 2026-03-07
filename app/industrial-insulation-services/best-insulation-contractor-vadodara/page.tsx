import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "best insulation contractor in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional best insulation contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/best-insulation-contractor-vadodara" },
  openGraph: {
    title: "best insulation contractor in Vadodara | VadodaraExperts",
    description: "Professional best insulation contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/best-insulation-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-insulation-contractor-vadodara" />;
}
