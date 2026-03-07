import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Wasp nest removal in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional wasp nest removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/wasp-nest-removal-vadodara" },
  openGraph: {
    title: "Wasp nest removal in Vadodara | VadodaraExperts",
    description: "Professional wasp nest removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/wasp-nest-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wasp-nest-removal-vadodara" />;
}
