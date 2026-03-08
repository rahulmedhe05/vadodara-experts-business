import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "assembly line automation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional assembly line automation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/assembly-line-automation-vadodara" },
  openGraph: {
    title: "assembly line automation in Vadodara | VadodaraExperts",
    description: "Professional assembly line automation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/assembly-line-automation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="assembly-line-automation-vadodara" />;
}
