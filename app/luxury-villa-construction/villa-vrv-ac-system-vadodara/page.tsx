import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "villa VRV AC system in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional villa vrv ac system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/villa-vrv-ac-system-vadodara" },
  openGraph: {
    title: "villa VRV AC system in Vadodara | VadodaraExperts",
    description: "Professional villa vrv ac system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/villa-vrv-ac-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-vrv-ac-system-vadodara" />;
}
