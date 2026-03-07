import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "AC relocation service in Vadodara | AC Services | VadodaraExperts",
  description: "Professional ac relocation service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/ac-relocation-service-vadodara" },
  openGraph: {
    title: "AC relocation service in Vadodara | VadodaraExperts",
    description: "Professional ac relocation service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/ac-relocation-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-relocation-service-vadodara" />;
}
