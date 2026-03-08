import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "manufacturing unit setup in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional manufacturing unit setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/manufacturing-unit-setup-vadodara" },
  openGraph: {
    title: "manufacturing unit setup in Vadodara | VadodaraExperts",
    description: "Professional manufacturing unit setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/manufacturing-unit-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manufacturing-unit-setup-vadodara" />;
}
