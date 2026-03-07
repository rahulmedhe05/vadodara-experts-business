import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire alarm sounder in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire alarm sounder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-alarm-sounder-vadodara" },
  openGraph: {
    title: "fire alarm sounder in Vadodara | VadodaraExperts",
    description: "Professional fire alarm sounder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-alarm-sounder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-alarm-sounder-vadodara" />;
}
