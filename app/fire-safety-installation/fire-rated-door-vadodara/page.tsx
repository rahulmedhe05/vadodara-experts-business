import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire rated door in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire rated door services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-rated-door-vadodara" },
  openGraph: {
    title: "fire rated door in Vadodara | VadodaraExperts",
    description: "Professional fire rated door services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-rated-door-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-rated-door-vadodara" />;
}
