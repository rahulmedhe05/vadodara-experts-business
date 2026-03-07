import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Utility management in Vadodara | Property Management Services | VadodaraExperts",
  description: "Professional utility management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services/utility-management-vadodara" },
  openGraph: {
    title: "Utility management in Vadodara | VadodaraExperts",
    description: "Professional utility management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-management-services/utility-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="utility-management-vadodara" />;
}
