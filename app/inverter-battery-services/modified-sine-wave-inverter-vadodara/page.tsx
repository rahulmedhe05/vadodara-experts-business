import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Modified sine wave inverter in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional modified sine wave inverter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/modified-sine-wave-inverter-vadodara" },
  openGraph: {
    title: "Modified sine wave inverter in Vadodara | VadodaraExperts",
    description: "Professional modified sine wave inverter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/modified-sine-wave-inverter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modified-sine-wave-inverter-vadodara" />;
}
