import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Late rent follow up in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional late rent follow up services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/late-rent-follow-up-vadodara" },
  openGraph: {
    title: "Late rent follow up in Vadodara | VadodaraExperts",
    description: "Professional late rent follow up services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/late-rent-follow-up-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="late-rent-follow-up-vadodara" />;
}
