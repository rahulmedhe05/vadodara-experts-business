import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "small batch CNC in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional small batch cnc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/small-batch-cnc-vadodara" },
  openGraph: {
    title: "small batch CNC in Vadodara | VadodaraExperts",
    description: "Professional small batch cnc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/small-batch-cnc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="small-batch-cnc-vadodara" />;
}
