import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Environmental impact in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional environmental impact services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/environmental-impact-vadodara" },
  openGraph: {
    title: "Environmental impact in Vadodara | VadodaraExperts",
    description: "Professional environmental impact services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/environmental-impact-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="environmental-impact-vadodara" />;
}
