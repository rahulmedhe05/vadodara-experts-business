import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "PA system rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional pa system rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/pa-system-rental-vadodara" },
  openGraph: {
    title: "PA system rental in Vadodara | VadodaraExperts",
    description: "Professional pa system rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/pa-system-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pa-system-rental-vadodara" />;
}
