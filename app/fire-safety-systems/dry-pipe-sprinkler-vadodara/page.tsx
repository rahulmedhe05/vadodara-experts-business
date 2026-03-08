import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "dry pipe sprinkler in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional dry pipe sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/dry-pipe-sprinkler-vadodara" },
  openGraph: {
    title: "dry pipe sprinkler in Vadodara | VadodaraExperts",
    description: "Professional dry pipe sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/dry-pipe-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-pipe-sprinkler-vadodara" />;
}
