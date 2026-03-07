import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "wire mesh container in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional wire mesh container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/wire-mesh-container-vadodara" },
  openGraph: {
    title: "wire mesh container in Vadodara | VadodaraExperts",
    description: "Professional wire mesh container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/wire-mesh-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wire-mesh-container-vadodara" />;
}
