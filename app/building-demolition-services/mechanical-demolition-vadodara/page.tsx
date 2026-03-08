import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "mechanical demolition in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional mechanical demolition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/mechanical-demolition-vadodara" },
  openGraph: {
    title: "mechanical demolition in Vadodara | VadodaraExperts",
    description: "Professional mechanical demolition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/mechanical-demolition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-demolition-vadodara" />;
}
