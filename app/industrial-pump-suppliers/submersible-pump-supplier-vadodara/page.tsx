import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "submersible pump supplier in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional submersible pump supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/submersible-pump-supplier-vadodara" },
  openGraph: {
    title: "submersible pump supplier in Vadodara | VadodaraExperts",
    description: "Professional submersible pump supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/submersible-pump-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="submersible-pump-supplier-vadodara" />;
}
