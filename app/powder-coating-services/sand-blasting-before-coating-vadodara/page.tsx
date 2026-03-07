import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "sand blasting before coating in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional sand blasting before coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/sand-blasting-before-coating-vadodara" },
  openGraph: {
    title: "sand blasting before coating in Vadodara | VadodaraExperts",
    description: "Professional sand blasting before coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/sand-blasting-before-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sand-blasting-before-coating-vadodara" />;
}
