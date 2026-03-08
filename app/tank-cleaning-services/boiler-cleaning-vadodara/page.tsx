import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "boiler cleaning in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional boiler cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/boiler-cleaning-vadodara" },
  openGraph: {
    title: "boiler cleaning in Vadodara | VadodaraExperts",
    description: "Professional boiler cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/boiler-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-cleaning-vadodara" />;
}
