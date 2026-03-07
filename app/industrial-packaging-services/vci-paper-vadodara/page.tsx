import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "VCI paper in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional vci paper services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/vci-paper-vadodara" },
  openGraph: {
    title: "VCI paper in Vadodara | VadodaraExperts",
    description: "Professional vci paper services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/vci-paper-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vci-paper-vadodara" />;
}
