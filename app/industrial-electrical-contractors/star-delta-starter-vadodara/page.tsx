import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "star delta starter in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional star delta starter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/star-delta-starter-vadodara" },
  openGraph: {
    title: "star delta starter in Vadodara | VadodaraExperts",
    description: "Professional star delta starter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/star-delta-starter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="star-delta-starter-vadodara" />;
}
