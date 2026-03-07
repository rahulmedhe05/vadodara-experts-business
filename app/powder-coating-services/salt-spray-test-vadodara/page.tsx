import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "salt spray test in Vadodara | Powder Coating Services | VadodaraExperts",
  description: "Professional salt spray test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services/salt-spray-test-vadodara" },
  openGraph: {
    title: "salt spray test in Vadodara | VadodaraExperts",
    description: "Professional salt spray test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/powder-coating-services/salt-spray-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="salt-spray-test-vadodara" />;
}
