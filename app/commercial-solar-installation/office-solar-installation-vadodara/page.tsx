import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "office solar installation in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional office solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/office-solar-installation-vadodara" },
  openGraph: {
    title: "office solar installation in Vadodara | VadodaraExperts",
    description: "Professional office solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/office-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-solar-installation-vadodara" />;
}
