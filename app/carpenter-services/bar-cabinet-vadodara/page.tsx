import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Bar cabinet in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional bar cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/bar-cabinet-vadodara" },
  openGraph: {
    title: "Bar cabinet in Vadodara | VadodaraExperts",
    description: "Professional bar cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/bar-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bar-cabinet-vadodara" />;
}
