import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Brand film in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional brand film services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/brand-film-vadodara" },
  openGraph: {
    title: "Brand film in Vadodara | VadodaraExperts",
    description: "Professional brand film services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/brand-film-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="brand-film-vadodara" />;
}
