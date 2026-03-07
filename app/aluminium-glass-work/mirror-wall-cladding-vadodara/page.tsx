import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "Mirror wall cladding in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional mirror wall cladding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/mirror-wall-cladding-vadodara" },
  openGraph: {
    title: "Mirror wall cladding in Vadodara | VadodaraExperts",
    description: "Professional mirror wall cladding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/mirror-wall-cladding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mirror-wall-cladding-vadodara" />;
}
