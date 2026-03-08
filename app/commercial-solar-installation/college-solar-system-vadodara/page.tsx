import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "college solar system in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional college solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/college-solar-system-vadodara" },
  openGraph: {
    title: "college solar system in Vadodara | VadodaraExperts",
    description: "Professional college solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/college-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="college-solar-system-vadodara" />;
}
