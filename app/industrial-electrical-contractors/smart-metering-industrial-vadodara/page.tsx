import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "smart metering industrial in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional smart metering industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/smart-metering-industrial-vadodara" },
  openGraph: {
    title: "smart metering industrial in Vadodara | VadodaraExperts",
    description: "Professional smart metering industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/smart-metering-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-metering-industrial-vadodara" />;
}
