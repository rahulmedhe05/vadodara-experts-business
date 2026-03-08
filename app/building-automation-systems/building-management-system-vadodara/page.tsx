import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "building management system in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional building management system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/building-management-system-vadodara" },
  openGraph: {
    title: "building management system in Vadodara | VadodaraExperts",
    description: "Professional building management system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/building-management-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-management-system-vadodara" />;
}
