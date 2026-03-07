import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "cat spaying cost in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional cat spaying cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/cat-spaying-cost-vadodara" },
  openGraph: {
    title: "cat spaying cost in Vadodara | VadodaraExperts",
    description: "Professional cat spaying cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/cat-spaying-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cat-spaying-cost-vadodara" />;
}
