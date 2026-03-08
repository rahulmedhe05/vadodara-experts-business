import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "dog parvovirus treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional dog parvovirus treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/dog-parvovirus-treatment-vadodara" },
  openGraph: {
    title: "dog parvovirus treatment in Vadodara | VadodaraExperts",
    description: "Professional dog parvovirus treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/dog-parvovirus-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-parvovirus-treatment-vadodara" />;
}
