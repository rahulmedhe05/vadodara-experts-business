import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "cesarean section for dog in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional cesarean section for dog services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/cesarean-section-for-dog-vadodara" },
  openGraph: {
    title: "cesarean section for dog in Vadodara | VadodaraExperts",
    description: "Professional cesarean section for dog services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/cesarean-section-for-dog-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cesarean-section-for-dog-vadodara" />;
}
