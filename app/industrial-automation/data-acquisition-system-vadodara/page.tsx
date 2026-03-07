import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "data acquisition system in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional data acquisition system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/data-acquisition-system-vadodara" },
  openGraph: {
    title: "data acquisition system in Vadodara | VadodaraExperts",
    description: "Professional data acquisition system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/data-acquisition-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="data-acquisition-system-vadodara" />;
}
