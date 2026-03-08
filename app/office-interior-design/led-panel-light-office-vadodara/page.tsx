import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "LED panel light office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional led panel light office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/led-panel-light-office-vadodara" },
  openGraph: {
    title: "LED panel light office in Vadodara | VadodaraExperts",
    description: "Professional led panel light office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/led-panel-light-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-panel-light-office-vadodara" />;
}
