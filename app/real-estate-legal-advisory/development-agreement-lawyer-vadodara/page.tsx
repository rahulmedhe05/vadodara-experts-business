import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "development agreement lawyer in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional development agreement lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/development-agreement-lawyer-vadodara" },
  openGraph: {
    title: "development agreement lawyer in Vadodara | VadodaraExperts",
    description: "Professional development agreement lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/development-agreement-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="development-agreement-lawyer-vadodara" />;
}
