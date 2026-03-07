import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "horizontal machining centre in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional horizontal machining centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/horizontal-machining-centre-vadodara" },
  openGraph: {
    title: "horizontal machining centre in Vadodara | VadodaraExperts",
    description: "Professional horizontal machining centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/horizontal-machining-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="horizontal-machining-centre-vadodara" />;
}
