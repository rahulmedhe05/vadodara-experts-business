import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Lighting technician in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional lighting technician services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/lighting-technician-vadodara" },
  openGraph: {
    title: "Lighting technician in Vadodara | VadodaraExperts",
    description: "Professional lighting technician services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/lighting-technician-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lighting-technician-vadodara" />;
}
