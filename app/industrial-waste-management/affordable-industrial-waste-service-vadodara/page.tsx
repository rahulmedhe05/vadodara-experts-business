import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Affordable industrial waste service in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional affordable industrial waste service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/affordable-industrial-waste-service-vadodara" },
  openGraph: {
    title: "Affordable industrial waste service in Vadodara | VadodaraExperts",
    description: "Professional affordable industrial waste service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/affordable-industrial-waste-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-industrial-waste-service-vadodara" />;
}
