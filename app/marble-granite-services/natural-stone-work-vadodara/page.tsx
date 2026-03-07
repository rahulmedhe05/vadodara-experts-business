import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Natural stone work in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional natural stone work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/natural-stone-work-vadodara" },
  openGraph: {
    title: "Natural stone work in Vadodara | VadodaraExperts",
    description: "Professional natural stone work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/natural-stone-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="natural-stone-work-vadodara" />;
}
