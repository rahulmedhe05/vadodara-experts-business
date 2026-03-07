import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "wet pipe sprinkler in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional wet pipe sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/wet-pipe-sprinkler-vadodara" },
  openGraph: {
    title: "wet pipe sprinkler in Vadodara | VadodaraExperts",
    description: "Professional wet pipe sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/wet-pipe-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wet-pipe-sprinkler-vadodara" />;
}
