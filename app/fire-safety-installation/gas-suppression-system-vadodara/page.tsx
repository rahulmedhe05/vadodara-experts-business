import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "gas suppression system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional gas suppression system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/gas-suppression-system-vadodara" },
  openGraph: {
    title: "gas suppression system in Vadodara | VadodaraExperts",
    description: "Professional gas suppression system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/gas-suppression-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-suppression-system-vadodara" />;
}
