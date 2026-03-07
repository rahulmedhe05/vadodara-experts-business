import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Digital mixing console in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional digital mixing console services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/digital-mixing-console-vadodara" },
  openGraph: {
    title: "Digital mixing console in Vadodara | VadodaraExperts",
    description: "Professional digital mixing console services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/digital-mixing-console-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="digital-mixing-console-vadodara" />;
}
