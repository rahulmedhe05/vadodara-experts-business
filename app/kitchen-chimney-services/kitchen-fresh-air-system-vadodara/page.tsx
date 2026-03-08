import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kitchen fresh air system in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional kitchen fresh air system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-fresh-air-system-vadodara" },
  openGraph: {
    title: "Kitchen fresh air system in Vadodara | VadodaraExperts",
    description: "Professional kitchen fresh air system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-fresh-air-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-fresh-air-system-vadodara" />;
}
