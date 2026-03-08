import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "industrial electrical AMC in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional industrial electrical amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/industrial-electrical-amc-vadodara" },
  openGraph: {
    title: "industrial electrical AMC in Vadodara | VadodaraExperts",
    description: "Professional industrial electrical amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/industrial-electrical-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-electrical-amc-vadodara" />;
}
