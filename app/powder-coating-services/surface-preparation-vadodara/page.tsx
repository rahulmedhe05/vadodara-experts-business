import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "surface preparation in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional surface preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/surface-preparation-vadodara" },
  openGraph: {
    title: "surface preparation in Vadodara | VadodaraExperts",
    description: "Professional surface preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/surface-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surface-preparation-vadodara" />;
}
