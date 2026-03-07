import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-boarding-services")!;

export const metadata: Metadata = {
  title: "in home pet sitter in Vadodara | Pet Boarding Services | VadodaraExperts",
  description: "Professional in home pet sitter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-boarding-services/in-home-pet-sitter-vadodara" },
  openGraph: {
    title: "in home pet sitter in Vadodara | VadodaraExperts",
    description: "Professional in home pet sitter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-boarding-services/in-home-pet-sitter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="in-home-pet-sitter-vadodara" />;
}
