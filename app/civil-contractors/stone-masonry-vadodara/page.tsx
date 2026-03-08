import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Stone masonry in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional stone masonry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/stone-masonry-vadodara" },
  openGraph: {
    title: "Stone masonry in Vadodara | VadodaraExperts",
    description: "Professional stone masonry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/stone-masonry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stone-masonry-vadodara" />;
}
