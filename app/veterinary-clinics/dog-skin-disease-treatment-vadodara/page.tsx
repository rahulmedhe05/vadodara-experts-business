import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "dog skin disease treatment in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional dog skin disease treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/dog-skin-disease-treatment-vadodara" },
  openGraph: {
    title: "dog skin disease treatment in Vadodara | VadodaraExperts",
    description: "Professional dog skin disease treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/dog-skin-disease-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-skin-disease-treatment-vadodara" />;
}
