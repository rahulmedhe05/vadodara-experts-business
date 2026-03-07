import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Decontamination services in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional decontamination services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/decontamination-services-vadodara" },
  openGraph: {
    title: "Decontamination services in Vadodara | VadodaraExperts",
    description: "Professional decontamination services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/decontamination-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="decontamination-services-vadodara" />;
}
