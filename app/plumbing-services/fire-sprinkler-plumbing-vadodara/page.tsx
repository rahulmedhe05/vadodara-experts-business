import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Fire sprinkler plumbing in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional fire sprinkler plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/fire-sprinkler-plumbing-vadodara" },
  openGraph: {
    title: "Fire sprinkler plumbing in Vadodara | VadodaraExperts",
    description: "Professional fire sprinkler plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/fire-sprinkler-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-sprinkler-plumbing-vadodara" />;
}
