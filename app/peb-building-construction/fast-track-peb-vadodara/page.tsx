import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "fast track PEB in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional fast track peb services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/fast-track-peb-vadodara" },
  openGraph: {
    title: "fast track PEB in Vadodara | VadodaraExperts",
    description: "Professional fast track peb services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/fast-track-peb-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fast-track-peb-vadodara" />;
}
