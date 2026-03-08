import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Find Boiler Services in Vadodara | Boiler Services | VadodaraExperts",
  description: "Professional find boiler services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services/find-boiler-services-vadodara" },
  openGraph: {
    title: "Find Boiler Services in Vadodara | VadodaraExperts",
    description: "Professional find boiler services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/boiler-services/find-boiler-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="find-boiler-services-vadodara" />;
}
