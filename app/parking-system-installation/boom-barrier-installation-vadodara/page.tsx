import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "boom barrier installation in Vadodara | Parking System Installation | VadodaraExperts",
  description: "Professional boom barrier installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation/boom-barrier-installation-vadodara" },
  openGraph: {
    title: "boom barrier installation in Vadodara | VadodaraExperts",
    description: "Professional boom barrier installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/parking-system-installation/boom-barrier-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boom-barrier-installation-vadodara" />;
}
