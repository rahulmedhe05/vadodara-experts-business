import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "dog surgery in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional dog surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/dog-surgery-vadodara" },
  openGraph: {
    title: "dog surgery in Vadodara | VadodaraExperts",
    description: "Professional dog surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/dog-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-surgery-vadodara" />;
}
