import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Online property registration in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional online property registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/online-property-registration-vadodara" },
  openGraph: {
    title: "Online property registration in Vadodara | VadodaraExperts",
    description: "Professional online property registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/online-property-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-property-registration-vadodara" />;
}
