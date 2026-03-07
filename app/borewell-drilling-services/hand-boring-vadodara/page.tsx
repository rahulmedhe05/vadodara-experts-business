import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Hand boring in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional hand boring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/hand-boring-vadodara" },
  openGraph: {
    title: "Hand boring in Vadodara | VadodaraExperts",
    description: "Professional hand boring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/hand-boring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hand-boring-vadodara" />;
}
