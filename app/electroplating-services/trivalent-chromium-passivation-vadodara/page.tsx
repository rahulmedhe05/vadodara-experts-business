import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "trivalent chromium passivation in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional trivalent chromium passivation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/trivalent-chromium-passivation-vadodara" },
  openGraph: {
    title: "trivalent chromium passivation in Vadodara | VadodaraExperts",
    description: "Professional trivalent chromium passivation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/trivalent-chromium-passivation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trivalent-chromium-passivation-vadodara" />;
}
