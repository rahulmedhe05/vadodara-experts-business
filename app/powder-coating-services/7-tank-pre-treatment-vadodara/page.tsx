import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "7 tank pre-treatment in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional 7 tank pre-treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/7-tank-pre-treatment-vadodara" },
  openGraph: {
    title: "7 tank pre-treatment in Vadodara | VadodaraExperts",
    description: "Professional 7 tank pre-treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/7-tank-pre-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="7-tank-pre-treatment-vadodara" />;
}
