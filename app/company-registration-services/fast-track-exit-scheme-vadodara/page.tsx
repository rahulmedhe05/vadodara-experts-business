import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Fast track exit scheme in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional fast track exit scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/fast-track-exit-scheme-vadodara" },
  openGraph: {
    title: "Fast track exit scheme in Vadodara | VadodaraExperts",
    description: "Professional fast track exit scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/fast-track-exit-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fast-track-exit-scheme-vadodara" />;
}
