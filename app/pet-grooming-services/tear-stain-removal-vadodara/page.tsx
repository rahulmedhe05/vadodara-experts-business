import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "tear stain removal in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional tear stain removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/tear-stain-removal-vadodara" },
  openGraph: {
    title: "tear stain removal in Vadodara | VadodaraExperts",
    description: "Professional tear stain removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/tear-stain-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tear-stain-removal-vadodara" />;
}
