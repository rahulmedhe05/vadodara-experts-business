import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Kerb stone installation in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional kerb stone installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/kerb-stone-installation-vadodara" },
  openGraph: {
    title: "Kerb stone installation in Vadodara | VadodaraExperts",
    description: "Professional kerb stone installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/kerb-stone-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kerb-stone-installation-vadodara" />;
}
