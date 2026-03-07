import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "non-IBR boiler in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional non-ibr boiler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/non-ibr-boiler-vadodara" },
  openGraph: {
    title: "non-IBR boiler in Vadodara | VadodaraExperts",
    description: "Professional non-ibr boiler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/non-ibr-boiler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-ibr-boiler-vadodara" />;
}
