import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "storage tank insulation in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional storage tank insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/storage-tank-insulation-vadodara" },
  openGraph: {
    title: "storage tank insulation in Vadodara | VadodaraExperts",
    description: "Professional storage tank insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/storage-tank-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storage-tank-insulation-vadodara" />;
}
