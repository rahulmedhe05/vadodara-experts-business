import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Scar revision in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional scar revision services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/scar-revision-vadodara" },
  openGraph: {
    title: "Scar revision in Vadodara | VadodaraExperts",
    description: "Professional scar revision services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/scar-revision-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scar-revision-vadodara" />;
}
