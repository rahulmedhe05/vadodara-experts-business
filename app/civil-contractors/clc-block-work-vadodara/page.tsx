import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "CLC block work in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional clc block work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/clc-block-work-vadodara" },
  openGraph: {
    title: "CLC block work in Vadodara | VadodaraExperts",
    description: "Professional clc block work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/clc-block-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clc-block-work-vadodara" />;
}
