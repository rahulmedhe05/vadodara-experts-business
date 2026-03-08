import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "FM200 fire suppression in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fm200 fire suppression services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fm200-fire-suppression-vadodara" },
  openGraph: {
    title: "FM200 fire suppression in Vadodara | VadodaraExperts",
    description: "Professional fm200 fire suppression services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fm200-fire-suppression-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fm200-fire-suppression-vadodara" />;
}
