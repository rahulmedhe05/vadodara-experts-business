import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "cladding welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional cladding welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/cladding-welding-vadodara" },
  openGraph: {
    title: "cladding welding in Vadodara | VadodaraExperts",
    description: "Professional cladding welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/cladding-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cladding-welding-vadodara" />;
}
