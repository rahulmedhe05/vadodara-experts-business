import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Petrol pump EV charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional petrol pump ev charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/petrol-pump-ev-charging-vadodara" },
  openGraph: {
    title: "Petrol pump EV charging in Vadodara | VadodaraExperts",
    description: "Professional petrol pump ev charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/petrol-pump-ev-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="petrol-pump-ev-charging-vadodara" />;
}
