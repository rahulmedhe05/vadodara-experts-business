import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Sub lease agreement in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional sub lease agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/sub-lease-agreement-vadodara" },
  openGraph: {
    title: "Sub lease agreement in Vadodara | VadodaraExperts",
    description: "Professional sub lease agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/sub-lease-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-lease-agreement-vadodara" />;
}
