import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "automated guided vehicle in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional automated guided vehicle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/automated-guided-vehicle-vadodara" },
  openGraph: {
    title: "automated guided vehicle in Vadodara | VadodaraExperts",
    description: "Professional automated guided vehicle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/automated-guided-vehicle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-guided-vehicle-vadodara" />;
}
