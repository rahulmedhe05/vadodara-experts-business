import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "robotic arm installation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional robotic arm installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/robotic-arm-installation-vadodara" },
  openGraph: {
    title: "robotic arm installation in Vadodara | VadodaraExperts",
    description: "Professional robotic arm installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/robotic-arm-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="robotic-arm-installation-vadodara" />;
}
