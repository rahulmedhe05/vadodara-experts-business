import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "steam distribution system in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional steam distribution system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/steam-distribution-system-vadodara" },
  openGraph: {
    title: "steam distribution system in Vadodara | VadodaraExperts",
    description: "Professional steam distribution system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/steam-distribution-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-distribution-system-vadodara" />;
}
