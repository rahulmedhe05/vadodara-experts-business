import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Derma roller hair treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional derma roller hair treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/derma-roller-hair-treatment-vadodara" },
  openGraph: {
    title: "Derma roller hair treatment in Vadodara | VadodaraExperts",
    description: "Professional derma roller hair treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/derma-roller-hair-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="derma-roller-hair-treatment-vadodara" />;
}
