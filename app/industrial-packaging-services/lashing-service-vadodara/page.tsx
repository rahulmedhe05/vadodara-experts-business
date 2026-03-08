import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "lashing service in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional lashing service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/lashing-service-vadodara" },
  openGraph: {
    title: "lashing service in Vadodara | VadodaraExperts",
    description: "Professional lashing service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/lashing-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lashing-service-vadodara" />;
}
