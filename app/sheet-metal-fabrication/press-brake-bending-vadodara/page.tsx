import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sheet-metal-fabrication")!;

export const metadata: Metadata = {
  title: "press brake bending in Vadodara | Sheet Metal Fabrication | VadodaraExperts",
  description: "Professional press brake bending services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sheet-metal-fabrication/press-brake-bending-vadodara" },
  openGraph: {
    title: "press brake bending in Vadodara | VadodaraExperts",
    description: "Professional press brake bending services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sheet-metal-fabrication/press-brake-bending-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="press-brake-bending-vadodara" />;
}
