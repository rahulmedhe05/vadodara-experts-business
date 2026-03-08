import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "wireless fire alarm in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional wireless fire alarm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/wireless-fire-alarm-vadodara" },
  openGraph: {
    title: "wireless fire alarm in Vadodara | VadodaraExperts",
    description: "Professional wireless fire alarm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/wireless-fire-alarm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wireless-fire-alarm-vadodara" />;
}
