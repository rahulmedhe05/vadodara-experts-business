import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "builder complaint lawyer in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional builder complaint lawyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/builder-complaint-lawyer-vadodara" },
  openGraph: {
    title: "builder complaint lawyer in Vadodara | VadodaraExperts",
    description: "Professional builder complaint lawyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/builder-complaint-lawyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="builder-complaint-lawyer-vadodara" />;
}
