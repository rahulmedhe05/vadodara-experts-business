import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "boiler automation in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional boiler automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/boiler-automation-vadodara" },
  openGraph: {
    title: "boiler automation in Vadodara | VadodaraExperts",
    description: "Professional boiler automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/boiler-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-automation-vadodara" />;
}
