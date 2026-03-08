import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Lighting setup in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional lighting setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/lighting-setup-vadodara" },
  openGraph: {
    title: "Lighting setup in Vadodara | VadodaraExperts",
    description: "Professional lighting setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/lighting-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lighting-setup-vadodara" />;
}
