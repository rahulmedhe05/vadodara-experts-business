import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "fibre cement cladding in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional fibre cement cladding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/fibre-cement-cladding-vadodara" },
  openGraph: {
    title: "fibre cement cladding in Vadodara | VadodaraExperts",
    description: "Professional fibre cement cladding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/fibre-cement-cladding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fibre-cement-cladding-vadodara" />;
}
