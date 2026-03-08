import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "ergonomic office design in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional ergonomic office design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/ergonomic-office-design-vadodara" },
  openGraph: {
    title: "ergonomic office design in Vadodara | VadodaraExperts",
    description: "Professional ergonomic office design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/ergonomic-office-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ergonomic-office-design-vadodara" />;
}
