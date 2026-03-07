import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "OHSAS 18001 migration in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional ohsas 18001 migration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/ohsas-18001-migration-vadodara" },
  openGraph: {
    title: "OHSAS 18001 migration in Vadodara | VadodaraExperts",
    description: "Professional ohsas 18001 migration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/ohsas-18001-migration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ohsas-18001-migration-vadodara" />;
}
