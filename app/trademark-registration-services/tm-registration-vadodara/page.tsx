import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "TM registration in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional tm registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/tm-registration-vadodara" },
  openGraph: {
    title: "TM registration in Vadodara | VadodaraExperts",
    description: "Professional tm registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/tm-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tm-registration-vadodara" />;
}
