import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "motor control centre in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional motor control centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/motor-control-centre-vadodara" },
  openGraph: {
    title: "motor control centre in Vadodara | VadodaraExperts",
    description: "Professional motor control centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/motor-control-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="motor-control-centre-vadodara" />;
}
