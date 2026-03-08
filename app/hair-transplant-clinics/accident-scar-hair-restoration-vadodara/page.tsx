import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Accident scar hair restoration in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional accident scar hair restoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/accident-scar-hair-restoration-vadodara" },
  openGraph: {
    title: "Accident scar hair restoration in Vadodara | VadodaraExperts",
    description: "Professional accident scar hair restoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/accident-scar-hair-restoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="accident-scar-hair-restoration-vadodara" />;
}
