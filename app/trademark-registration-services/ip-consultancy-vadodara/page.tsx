import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "IP consultancy in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional ip consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/ip-consultancy-vadodara" },
  openGraph: {
    title: "IP consultancy in Vadodara | VadodaraExperts",
    description: "Professional ip consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/ip-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ip-consultancy-vadodara" />;
}
