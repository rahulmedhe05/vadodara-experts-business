import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Bajaj Chetak charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional bajaj chetak charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/bajaj-chetak-charging-vadodara" },
  openGraph: {
    title: "Bajaj Chetak charging in Vadodara | VadodaraExperts",
    description: "Professional bajaj chetak charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/bajaj-chetak-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bajaj-chetak-charging-vadodara" />;
}
