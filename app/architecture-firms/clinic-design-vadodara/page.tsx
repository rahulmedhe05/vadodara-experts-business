import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Clinic design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional clinic design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/clinic-design-vadodara" },
  openGraph: {
    title: "Clinic design in Vadodara | VadodaraExperts",
    description: "Professional clinic design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/clinic-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clinic-design-vadodara" />;
}
