import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "derusting in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional derusting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/derusting-vadodara" },
  openGraph: {
    title: "derusting in Vadodara | VadodaraExperts",
    description: "Professional derusting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/derusting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="derusting-vadodara" />;
}
