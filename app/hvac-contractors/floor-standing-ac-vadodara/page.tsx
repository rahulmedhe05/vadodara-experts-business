import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "floor standing AC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional floor standing ac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/floor-standing-ac-vadodara" },
  openGraph: {
    title: "floor standing AC in Vadodara | VadodaraExperts",
    description: "Professional floor standing ac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/floor-standing-ac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-standing-ac-vadodara" />;
}
