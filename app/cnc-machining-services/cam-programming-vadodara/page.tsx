import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "CAM programming in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional cam programming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/cam-programming-vadodara" },
  openGraph: {
    title: "CAM programming in Vadodara | VadodaraExperts",
    description: "Professional cam programming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/cam-programming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cam-programming-vadodara" />;
}
