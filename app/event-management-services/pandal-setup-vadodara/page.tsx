import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Pandal setup in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional pandal setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/pandal-setup-vadodara" },
  openGraph: {
    title: "Pandal setup in Vadodara | VadodaraExperts",
    description: "Professional pandal setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/pandal-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pandal-setup-vadodara" />;
}
