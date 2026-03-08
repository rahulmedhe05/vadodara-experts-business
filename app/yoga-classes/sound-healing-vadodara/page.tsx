import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Sound healing in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional sound healing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/sound-healing-vadodara" },
  openGraph: {
    title: "Sound healing in Vadodara | VadodaraExperts",
    description: "Professional sound healing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/sound-healing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sound-healing-vadodara" />;
}
