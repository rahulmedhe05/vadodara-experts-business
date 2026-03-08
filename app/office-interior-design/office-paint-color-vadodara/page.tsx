import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "office paint color in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional office paint color services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/office-paint-color-vadodara" },
  openGraph: {
    title: "office paint color in Vadodara | VadodaraExperts",
    description: "Professional office paint color services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/office-paint-color-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-paint-color-vadodara" />;
}
