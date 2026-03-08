import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "lunch area design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional lunch area design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/lunch-area-design-vadodara" },
  openGraph: {
    title: "lunch area design in Vadodara | VadodaraExperts",
    description: "Professional lunch area design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/lunch-area-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lunch-area-design-vadodara" />;
}
