import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pet-grooming-services")!;

export const metadata: Metadata = {
  title: "de-shedding treatment in Vadodara | Pet Grooming Services | VadodaraExperts",
  description: "Professional de-shedding treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pet-grooming-services/de-shedding-treatment-vadodara" },
  openGraph: {
    title: "de-shedding treatment in Vadodara | VadodaraExperts",
    description: "Professional de-shedding treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pet-grooming-services/de-shedding-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="de-shedding-treatment-vadodara" />;
}
