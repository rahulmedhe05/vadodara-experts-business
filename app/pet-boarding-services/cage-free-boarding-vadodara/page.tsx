import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "cage free boarding in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional cage free boarding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/cage-free-boarding-vadodara" },
  openGraph: {
    title: "cage free boarding in Vadodara | VadodaraExperts",
    description: "Professional cage free boarding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/cage-free-boarding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cage-free-boarding-vadodara" />;
}
