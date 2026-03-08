import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Scrap management in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional scrap management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/scrap-management-vadodara" },
  openGraph: {
    title: "Scrap management in Vadodara | VadodaraExperts",
    description: "Professional scrap management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/scrap-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scrap-management-vadodara" />;
}
