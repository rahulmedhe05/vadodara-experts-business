import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "kitchen hood suppression in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional kitchen hood suppression services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/kitchen-hood-suppression-vadodara" },
  openGraph: {
    title: "kitchen hood suppression in Vadodara | VadodaraExperts",
    description: "Professional kitchen hood suppression services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/kitchen-hood-suppression-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-hood-suppression-vadodara" />;
}
