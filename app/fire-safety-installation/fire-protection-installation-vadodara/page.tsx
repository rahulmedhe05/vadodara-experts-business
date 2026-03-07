import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire protection installation in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire protection installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-protection-installation-vadodara" },
  openGraph: {
    title: "fire protection installation in Vadodara | VadodaraExperts",
    description: "Professional fire protection installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-protection-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-protection-installation-vadodara" />;
}
