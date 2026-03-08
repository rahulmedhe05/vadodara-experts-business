import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Hyundai Ioniq charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional hyundai ioniq charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/hyundai-ioniq-charging-vadodara" },
  openGraph: {
    title: "Hyundai Ioniq charging in Vadodara | VadodaraExperts",
    description: "Professional hyundai ioniq charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/hyundai-ioniq-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hyundai-ioniq-charging-vadodara" />;
}
