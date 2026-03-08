import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "boiler efficiency test in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional boiler efficiency test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-efficiency-test-vadodara" },
  openGraph: {
    title: "boiler efficiency test in Vadodara | VadodaraExperts",
    description: "Professional boiler efficiency test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-efficiency-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-efficiency-test-vadodara" />;
}
