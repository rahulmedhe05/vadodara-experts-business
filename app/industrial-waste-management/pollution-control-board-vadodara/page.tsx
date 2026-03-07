import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Pollution control board in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional pollution control board services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/pollution-control-board-vadodara" },
  openGraph: {
    title: "Pollution control board in Vadodara | VadodaraExperts",
    description: "Professional pollution control board services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/pollution-control-board-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pollution-control-board-vadodara" />;
}
