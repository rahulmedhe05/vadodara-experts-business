import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Sexually transmitted infection in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional sexually transmitted infection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/sexually-transmitted-infection-vadodara" },
  openGraph: {
    title: "Sexually transmitted infection in Vadodara | VadodaraExperts",
    description: "Professional sexually transmitted infection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/sexually-transmitted-infection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sexually-transmitted-infection-vadodara" />;
}
