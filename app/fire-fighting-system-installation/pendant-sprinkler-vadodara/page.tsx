import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "pendant sprinkler in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional pendant sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/pendant-sprinkler-vadodara" },
  openGraph: {
    title: "pendant sprinkler in Vadodara | VadodaraExperts",
    description: "Professional pendant sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/pendant-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pendant-sprinkler-vadodara" />;
}
