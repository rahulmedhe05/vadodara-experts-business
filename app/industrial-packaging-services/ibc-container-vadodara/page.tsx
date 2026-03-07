import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "IBC container in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional ibc container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/ibc-container-vadodara" },
  openGraph: {
    title: "IBC container in Vadodara | VadodaraExperts",
    description: "Professional ibc container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/ibc-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ibc-container-vadodara" />;
}
