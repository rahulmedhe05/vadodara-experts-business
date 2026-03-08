import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "platform structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional platform structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/platform-structure-vadodara" },
  openGraph: {
    title: "platform structure in Vadodara | VadodaraExperts",
    description: "Professional platform structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/platform-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="platform-structure-vadodara" />;
}
