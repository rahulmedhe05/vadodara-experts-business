import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "spray booth in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional spray booth services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/spray-booth-vadodara" },
  openGraph: {
    title: "spray booth in Vadodara | VadodaraExperts",
    description: "Professional spray booth services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/spray-booth-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spray-booth-vadodara" />;
}
