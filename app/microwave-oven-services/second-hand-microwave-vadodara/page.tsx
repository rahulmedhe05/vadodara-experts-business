import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("microwave-oven-services")!;

export const metadata: Metadata = {
  title: "Second hand microwave in Vadodara | Microwave Oven Services | VadodaraExperts",
  description: "Professional second hand microwave services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/microwave-oven-services/second-hand-microwave-vadodara" },
  openGraph: {
    title: "Second hand microwave in Vadodara | VadodaraExperts",
    description: "Professional second hand microwave services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/microwave-oven-services/second-hand-microwave-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-hand-microwave-vadodara" />;
}
