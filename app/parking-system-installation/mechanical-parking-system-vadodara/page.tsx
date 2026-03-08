import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "mechanical parking system in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional mechanical parking system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/mechanical-parking-system-vadodara" },
  openGraph: {
    title: "mechanical parking system in Vadodara | VadodaraExperts",
    description: "Professional mechanical parking system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/mechanical-parking-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-parking-system-vadodara" />;
}
