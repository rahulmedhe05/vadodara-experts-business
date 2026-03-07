import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "dog dental cleaning in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional dog dental cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/dog-dental-cleaning-vadodara" },
  openGraph: {
    title: "dog dental cleaning in Vadodara | VadodaraExperts",
    description: "Professional dog dental cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/dog-dental-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-dental-cleaning-vadodara" />;
}
