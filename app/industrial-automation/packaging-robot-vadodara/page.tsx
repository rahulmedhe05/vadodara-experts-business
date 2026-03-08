import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "packaging robot in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional packaging robot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/packaging-robot-vadodara" },
  openGraph: {
    title: "packaging robot in Vadodara | VadodaraExperts",
    description: "Professional packaging robot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/packaging-robot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packaging-robot-vadodara" />;
}
