import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "industrial electrical maintenance in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional industrial electrical maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/industrial-electrical-maintenance-vadodara" },
  openGraph: {
    title: "industrial electrical maintenance in Vadodara | VadodaraExperts",
    description: "Professional industrial electrical maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/industrial-electrical-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-electrical-maintenance-vadodara" />;
}
