import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Verified Boiler Services in Vadodara | Boiler Services | VadodaraExperts",
  description: "Professional verified boiler services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services/verified-boiler-services-vadodara" },
  openGraph: {
    title: "Verified Boiler Services in Vadodara | VadodaraExperts",
    description: "Professional verified boiler services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/boiler-services/verified-boiler-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="verified-boiler-services-vadodara" />;
}
