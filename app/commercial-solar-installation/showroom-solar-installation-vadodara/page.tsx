import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "showroom solar installation in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional showroom solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/showroom-solar-installation-vadodara" },
  openGraph: {
    title: "showroom solar installation in Vadodara | VadodaraExperts",
    description: "Professional showroom solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/showroom-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="showroom-solar-installation-vadodara" />;
}
