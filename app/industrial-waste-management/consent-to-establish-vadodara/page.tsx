import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Consent to establish in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional consent to establish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/consent-to-establish-vadodara" },
  openGraph: {
    title: "Consent to establish in Vadodara | VadodaraExperts",
    description: "Professional consent to establish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/consent-to-establish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="consent-to-establish-vadodara" />;
}
