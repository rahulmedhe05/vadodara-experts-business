import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "school solar installation in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional school solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/school-solar-installation-vadodara" },
  openGraph: {
    title: "school solar installation in Vadodara | VadodaraExperts",
    description: "Professional school solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/school-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-solar-installation-vadodara" />;
}
