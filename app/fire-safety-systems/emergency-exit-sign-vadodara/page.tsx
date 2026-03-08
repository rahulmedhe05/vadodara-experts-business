import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "emergency exit sign in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional emergency exit sign services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/emergency-exit-sign-vadodara" },
  openGraph: {
    title: "emergency exit sign in Vadodara | VadodaraExperts",
    description: "Professional emergency exit sign services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/emergency-exit-sign-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-exit-sign-vadodara" />;
}
