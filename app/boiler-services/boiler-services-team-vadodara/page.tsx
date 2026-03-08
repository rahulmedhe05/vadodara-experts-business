import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Boiler Services Team in Vadodara | Boiler Services | VadodaraExperts",
  description: "Professional boiler services team services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services/boiler-services-team-vadodara" },
  openGraph: {
    title: "Boiler Services Team in Vadodara | VadodaraExperts",
    description: "Professional boiler services team services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/boiler-services/boiler-services-team-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-services-team-vadodara" />;
}
