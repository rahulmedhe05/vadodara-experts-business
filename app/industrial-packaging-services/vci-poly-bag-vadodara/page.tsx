import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "VCI poly bag in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional vci poly bag services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/vci-poly-bag-vadodara" },
  openGraph: {
    title: "VCI poly bag in Vadodara | VadodaraExperts",
    description: "Professional vci poly bag services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/vci-poly-bag-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vci-poly-bag-vadodara" />;
}
