import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "underground fire tank in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional underground fire tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/underground-fire-tank-vadodara" },
  openGraph: {
    title: "underground fire tank in Vadodara | VadodaraExperts",
    description: "Professional underground fire tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/underground-fire-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="underground-fire-tank-vadodara" />;
}
