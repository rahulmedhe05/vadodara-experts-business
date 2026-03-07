import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Industrial sludge management in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional industrial sludge management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/industrial-sludge-management-vadodara" },
  openGraph: {
    title: "Industrial sludge management in Vadodara | VadodaraExperts",
    description: "Professional industrial sludge management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/industrial-sludge-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-sludge-management-vadodara" />;
}
