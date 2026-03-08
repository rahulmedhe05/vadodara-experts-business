import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "fluidized bed coating in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional fluidized bed coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/fluidized-bed-coating-vadodara" },
  openGraph: {
    title: "fluidized bed coating in Vadodara | VadodaraExperts",
    description: "Professional fluidized bed coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/fluidized-bed-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fluidized-bed-coating-vadodara" />;
}
