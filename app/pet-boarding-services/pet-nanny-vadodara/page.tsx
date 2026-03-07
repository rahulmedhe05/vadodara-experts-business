import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "pet nanny in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional pet nanny services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/pet-nanny-vadodara" },
  openGraph: {
    title: "pet nanny in Vadodara | VadodaraExperts",
    description: "Professional pet nanny services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/pet-nanny-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pet-nanny-vadodara" />;
}
