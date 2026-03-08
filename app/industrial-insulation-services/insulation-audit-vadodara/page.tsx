import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "insulation audit in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional insulation audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/insulation-audit-vadodara" },
  openGraph: {
    title: "insulation audit in Vadodara | VadodaraExperts",
    description: "Professional insulation audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/insulation-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulation-audit-vadodara" />;
}
