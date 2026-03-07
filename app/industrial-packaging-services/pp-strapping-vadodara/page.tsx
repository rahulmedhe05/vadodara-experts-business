import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "PP strapping in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional pp strapping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/pp-strapping-vadodara" },
  openGraph: {
    title: "PP strapping in Vadodara | VadodaraExperts",
    description: "Professional pp strapping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/pp-strapping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pp-strapping-vadodara" />;
}
