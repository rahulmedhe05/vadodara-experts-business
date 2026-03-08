import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "automation programming in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional automation programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/automation-programming-vadodara" },
  openGraph: {
    title: "automation programming in Vadodara | VadodaraExperts",
    description: "Professional automation programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/automation-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automation-programming-vadodara" />;
}
