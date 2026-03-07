import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "LED parking light in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional led parking light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/led-parking-light-vadodara" },
  openGraph: {
    title: "LED parking light in Vadodara | VadodaraExperts",
    description: "Professional led parking light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/led-parking-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-parking-light-vadodara" />;
}
