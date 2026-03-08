import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "factory electrical contractor in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional factory electrical contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/factory-electrical-contractor-vadodara" },
  openGraph: {
    title: "factory electrical contractor in Vadodara | VadodaraExperts",
    description: "Professional factory electrical contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/factory-electrical-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-electrical-contractor-vadodara" />;
}
