import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Ather charging station in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ather charging station services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ather-charging-station-vadodara" },
  openGraph: {
    title: "Ather charging station in Vadodara | VadodaraExperts",
    description: "Professional ather charging station services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ather-charging-station-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ather-charging-station-vadodara" />;
}
