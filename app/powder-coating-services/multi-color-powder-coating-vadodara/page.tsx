import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "multi color powder coating in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional multi color powder coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/multi-color-powder-coating-vadodara" },
  openGraph: {
    title: "multi color powder coating in Vadodara | VadodaraExperts",
    description: "Professional multi color powder coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/multi-color-powder-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-color-powder-coating-vadodara" />;
}
