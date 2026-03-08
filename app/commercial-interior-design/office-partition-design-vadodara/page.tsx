import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "office partition design in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional office partition design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/office-partition-design-vadodara" },
  openGraph: {
    title: "office partition design in Vadodara | VadodaraExperts",
    description: "Professional office partition design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/office-partition-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-partition-design-vadodara" />;
}
