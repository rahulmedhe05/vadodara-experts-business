import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Sound proof partition in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional sound proof partition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/sound-proof-partition-vadodara" },
  openGraph: {
    title: "Sound proof partition in Vadodara | VadodaraExperts",
    description: "Professional sound proof partition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/sound-proof-partition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sound-proof-partition-vadodara" />;
}
