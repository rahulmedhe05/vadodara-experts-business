import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "corporate office design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional corporate office design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/corporate-office-design-vadodara" },
  openGraph: {
    title: "corporate office design in Vadodara | VadodaraExperts",
    description: "Professional corporate office design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/corporate-office-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-office-design-vadodara" />;
}
