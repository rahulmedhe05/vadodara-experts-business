import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "emergency exit light in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional emergency exit light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/emergency-exit-light-vadodara" },
  openGraph: {
    title: "emergency exit light in Vadodara | VadodaraExperts",
    description: "Professional emergency exit light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/emergency-exit-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-exit-light-vadodara" />;
}
