import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "boarding kennel in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional boarding kennel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/boarding-kennel-vadodara" },
  openGraph: {
    title: "boarding kennel in Vadodara | VadodaraExperts",
    description: "Professional boarding kennel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/boarding-kennel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boarding-kennel-vadodara" />;
}
