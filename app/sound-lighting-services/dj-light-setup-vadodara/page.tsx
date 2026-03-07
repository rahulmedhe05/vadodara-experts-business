import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "DJ light setup in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional dj light setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/dj-light-setup-vadodara" },
  openGraph: {
    title: "DJ light setup in Vadodara | VadodaraExperts",
    description: "Professional dj light setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/dj-light-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dj-light-setup-vadodara" />;
}
