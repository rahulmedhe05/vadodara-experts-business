import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "warehouse automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional warehouse automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/warehouse-automation-vadodara" },
  openGraph: {
    title: "warehouse automation in Vadodara | VadodaraExperts",
    description: "Professional warehouse automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/warehouse-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-automation-vadodara" />;
}
