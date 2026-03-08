import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "feature wall office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional feature wall office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/feature-wall-office-vadodara" },
  openGraph: {
    title: "feature wall office in Vadodara | VadodaraExperts",
    description: "Professional feature wall office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/feature-wall-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="feature-wall-office-vadodara" />;
}
