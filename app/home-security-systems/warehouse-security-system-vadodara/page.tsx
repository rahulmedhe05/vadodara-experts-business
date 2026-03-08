import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Warehouse security system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional warehouse security system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/warehouse-security-system-vadodara" },
  openGraph: {
    title: "Warehouse security system in Vadodara | VadodaraExperts",
    description: "Professional warehouse security system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/warehouse-security-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-security-system-vadodara" />;
}
