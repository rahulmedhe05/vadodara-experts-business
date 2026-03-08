import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "construction waste removal in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional construction waste removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/construction-waste-removal-vadodara" },
  openGraph: {
    title: "construction waste removal in Vadodara | VadodaraExperts",
    description: "Professional construction waste removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/construction-waste-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-waste-removal-vadodara" />;
}
