import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Old building termite control in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional old building termite control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/old-building-termite-control-vadodara" },
  openGraph: {
    title: "Old building termite control in Vadodara | VadodaraExperts",
    description: "Professional old building termite control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/old-building-termite-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-building-termite-control-vadodara" />;
}
