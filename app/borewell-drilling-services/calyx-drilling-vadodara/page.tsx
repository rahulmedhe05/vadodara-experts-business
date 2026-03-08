import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Calyx drilling in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional calyx drilling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/calyx-drilling-vadodara" },
  openGraph: {
    title: "Calyx drilling in Vadodara | VadodaraExperts",
    description: "Professional calyx drilling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/calyx-drilling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="calyx-drilling-vadodara" />;
}
