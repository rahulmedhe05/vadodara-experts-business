import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-generator-suppliers")!;

export const metadata: Metadata = {
  title: "standby generator in Vadodara | Industrial Generator Suppliers | VadodaraExperts",
  description: "Professional standby generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-generator-suppliers/standby-generator-vadodara" },
  openGraph: {
    title: "standby generator in Vadodara | VadodaraExperts",
    description: "Professional standby generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-generator-suppliers/standby-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="standby-generator-vadodara" />;
}
