import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "fire sprinkler head in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional fire sprinkler head services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-sprinkler-head-vadodara" },
  openGraph: {
    title: "fire sprinkler head in Vadodara | VadodaraExperts",
    description: "Professional fire sprinkler head services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-sprinkler-head-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-sprinkler-head-vadodara" />;
}
