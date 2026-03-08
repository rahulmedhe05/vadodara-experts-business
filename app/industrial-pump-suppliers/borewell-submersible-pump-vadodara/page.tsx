import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "borewell submersible pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional borewell submersible pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/borewell-submersible-pump-vadodara" },
  openGraph: {
    title: "borewell submersible pump in Vadodara | VadodaraExperts",
    description: "Professional borewell submersible pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/borewell-submersible-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-submersible-pump-vadodara" />;
}
