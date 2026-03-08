import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "unauthorized structure removal in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional unauthorized structure removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/unauthorized-structure-removal-vadodara" },
  openGraph: {
    title: "unauthorized structure removal in Vadodara | VadodaraExperts",
    description: "Professional unauthorized structure removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/unauthorized-structure-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="unauthorized-structure-removal-vadodara" />;
}
