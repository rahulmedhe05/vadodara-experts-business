import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Boiler Services Latest Technology in Vadodara | Boiler Services | VadodaraExperts",
  description: "Professional boiler services latest technology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services/boiler-services-latest-technology-vadodara" },
  openGraph: {
    title: "Boiler Services Latest Technology in Vadodara | VadodaraExperts",
    description: "Professional boiler services latest technology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/boiler-services/boiler-services-latest-technology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-services-latest-technology-vadodara" />;
}
