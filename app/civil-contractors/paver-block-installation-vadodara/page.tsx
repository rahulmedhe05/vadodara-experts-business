import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Paver block installation in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional paver block installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/paver-block-installation-vadodara" },
  openGraph: {
    title: "Paver block installation in Vadodara | VadodaraExperts",
    description: "Professional paver block installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/paver-block-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="paver-block-installation-vadodara" />;
}
