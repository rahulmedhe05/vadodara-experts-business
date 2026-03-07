import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "server rack fabrication in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional server rack fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/server-rack-fabrication-vadodara" },
  openGraph: {
    title: "server rack fabrication in Vadodara | VadodaraExperts",
    description: "Professional server rack fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/server-rack-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="server-rack-fabrication-vadodara" />;
}
