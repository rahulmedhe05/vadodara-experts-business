import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "heat treated wood packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional heat treated wood packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/heat-treated-wood-packaging-vadodara" },
  openGraph: {
    title: "heat treated wood packaging in Vadodara | VadodaraExperts",
    description: "Professional heat treated wood packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/heat-treated-wood-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-treated-wood-packaging-vadodara" />;
}
