import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "conventional fire alarm in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional conventional fire alarm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/conventional-fire-alarm-vadodara" },
  openGraph: {
    title: "conventional fire alarm in Vadodara | VadodaraExperts",
    description: "Professional conventional fire alarm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/conventional-fire-alarm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conventional-fire-alarm-vadodara" />;
}
