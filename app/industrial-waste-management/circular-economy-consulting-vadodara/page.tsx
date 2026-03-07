import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Circular economy consulting in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional circular economy consulting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/circular-economy-consulting-vadodara" },
  openGraph: {
    title: "Circular economy consulting in Vadodara | VadodaraExperts",
    description: "Professional circular economy consulting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/circular-economy-consulting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="circular-economy-consulting-vadodara" />;
}
