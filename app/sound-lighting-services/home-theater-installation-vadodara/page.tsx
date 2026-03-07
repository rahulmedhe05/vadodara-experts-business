import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Home theater installation in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional home theater installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/home-theater-installation-vadodara" },
  openGraph: {
    title: "Home theater installation in Vadodara | VadodaraExperts",
    description: "Professional home theater installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/home-theater-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-theater-installation-vadodara" />;
}
