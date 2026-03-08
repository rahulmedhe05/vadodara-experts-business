import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "stepper motor control in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional stepper motor control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/stepper-motor-control-vadodara" },
  openGraph: {
    title: "stepper motor control in Vadodara | VadodaraExperts",
    description: "Professional stepper motor control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/stepper-motor-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stepper-motor-control-vadodara" />;
}
