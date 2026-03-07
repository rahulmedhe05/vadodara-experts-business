import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "consent to operate in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional consent to operate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/consent-to-operate-vadodara" },
  openGraph: {
    title: "consent to operate in Vadodara | VadodaraExperts",
    description: "Professional consent to operate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/consent-to-operate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="consent-to-operate-vadodara" />;
}
