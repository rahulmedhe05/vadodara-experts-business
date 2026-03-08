import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "builder buyer agreement in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional builder buyer agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/builder-buyer-agreement-vadodara" },
  openGraph: {
    title: "builder buyer agreement in Vadodara | VadodaraExperts",
    description: "Professional builder buyer agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/builder-buyer-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="builder-buyer-agreement-vadodara" />;
}
