import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "soft starter panel in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional soft starter panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/soft-starter-panel-vadodara" },
  openGraph: {
    title: "soft starter panel in Vadodara | VadodaraExperts",
    description: "Professional soft starter panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/soft-starter-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="soft-starter-panel-vadodara" />;
}
