import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "packing material supplier in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional packing material supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/packing-material-supplier-vadodara" },
  openGraph: {
    title: "packing material supplier in Vadodara | VadodaraExperts",
    description: "Professional packing material supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/packing-material-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="packing-material-supplier-vadodara" />;
}
