import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Garden swing in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional garden swing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/garden-swing-vadodara" },
  openGraph: {
    title: "Garden swing in Vadodara | VadodaraExperts",
    description: "Professional garden swing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/garden-swing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garden-swing-vadodara" />;
}
