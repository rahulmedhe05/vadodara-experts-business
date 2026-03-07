import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire system maintenance in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire system maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-system-maintenance-vadodara" },
  openGraph: {
    title: "fire system maintenance in Vadodara | VadodaraExperts",
    description: "Professional fire system maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-system-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-system-maintenance-vadodara" />;
}
