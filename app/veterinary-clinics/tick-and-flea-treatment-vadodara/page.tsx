import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "tick and flea treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional tick and flea treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/tick-and-flea-treatment-vadodara" },
  openGraph: {
    title: "tick and flea treatment in Vadodara | VadodaraExperts",
    description: "Professional tick and flea treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/tick-and-flea-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tick-and-flea-treatment-vadodara" />;
}
