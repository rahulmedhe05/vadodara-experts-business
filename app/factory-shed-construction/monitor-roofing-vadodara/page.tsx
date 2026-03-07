import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "monitor roofing in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional monitor roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/monitor-roofing-vadodara" },
  openGraph: {
    title: "monitor roofing in Vadodara | VadodaraExperts",
    description: "Professional monitor roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/monitor-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="monitor-roofing-vadodara" />;
}
