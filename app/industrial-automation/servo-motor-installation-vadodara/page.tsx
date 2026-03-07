import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "servo motor installation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional servo motor installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/servo-motor-installation-vadodara" },
  openGraph: {
    title: "servo motor installation in Vadodara | VadodaraExperts",
    description: "Professional servo motor installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/servo-motor-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="servo-motor-installation-vadodara" />;
}
