import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Wardrobe auto light sensor in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional wardrobe auto light sensor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-auto-light-sensor-vadodara" },
  openGraph: {
    title: "Wardrobe auto light sensor in Vadodara | VadodaraExperts",
    description: "Professional wardrobe auto light sensor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/wardrobe-auto-light-sensor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wardrobe-auto-light-sensor-vadodara" />;
}
