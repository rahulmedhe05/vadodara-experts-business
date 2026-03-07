import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Expired chemical disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional expired chemical disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/expired-chemical-disposal-vadodara" },
  openGraph: {
    title: "Expired chemical disposal in Vadodara | VadodaraExperts",
    description: "Professional expired chemical disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/expired-chemical-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="expired-chemical-disposal-vadodara" />;
}
