import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "best demolition contractor in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional best demolition contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/best-demolition-contractor-vadodara" },
  openGraph: {
    title: "best demolition contractor in Vadodara | VadodaraExperts",
    description: "Professional best demolition contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/best-demolition-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-demolition-contractor-vadodara" />;
}
