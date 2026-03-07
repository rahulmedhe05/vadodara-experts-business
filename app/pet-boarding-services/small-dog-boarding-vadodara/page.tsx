import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "small dog boarding in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional small dog boarding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/small-dog-boarding-vadodara" },
  openGraph: {
    title: "small dog boarding in Vadodara | VadodaraExperts",
    description: "Professional small dog boarding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/small-dog-boarding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="small-dog-boarding-vadodara" />;
}
