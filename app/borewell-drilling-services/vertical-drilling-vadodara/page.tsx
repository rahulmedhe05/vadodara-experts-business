import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Vertical drilling in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional vertical drilling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/vertical-drilling-vadodara" },
  openGraph: {
    title: "Vertical drilling in Vadodara | VadodaraExperts",
    description: "Professional vertical drilling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/vertical-drilling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vertical-drilling-vadodara" />;
}
