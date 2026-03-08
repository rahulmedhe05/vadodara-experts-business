import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Anti termite barrier in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional anti termite barrier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/anti-termite-barrier-vadodara" },
  openGraph: {
    title: "Anti termite barrier in Vadodara | VadodaraExperts",
    description: "Professional anti termite barrier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/anti-termite-barrier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-termite-barrier-vadodara" />;
}
