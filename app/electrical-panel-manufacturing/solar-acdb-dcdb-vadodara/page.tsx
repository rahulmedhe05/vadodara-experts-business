import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "solar ACDB DCDB in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional solar acdb dcdb services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/solar-acdb-dcdb-vadodara" },
  openGraph: {
    title: "solar ACDB DCDB in Vadodara | VadodaraExperts",
    description: "Professional solar acdb dcdb services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/solar-acdb-dcdb-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-acdb-dcdb-vadodara" />;
}
