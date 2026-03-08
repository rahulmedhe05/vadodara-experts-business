import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "powder coating for garden furniture in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional powder coating for garden furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/powder-coating-for-garden-furniture-vadodara" },
  openGraph: {
    title: "powder coating for garden furniture in Vadodara | VadodaraExperts",
    description: "Professional powder coating for garden furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/powder-coating-for-garden-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="powder-coating-for-garden-furniture-vadodara" />;
}
