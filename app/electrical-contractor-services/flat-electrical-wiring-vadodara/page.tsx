import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "flat electrical wiring in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional flat electrical wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/flat-electrical-wiring-vadodara" },
  openGraph: {
    title: "flat electrical wiring in Vadodara | VadodaraExperts",
    description: "Professional flat electrical wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/flat-electrical-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flat-electrical-wiring-vadodara" />;
}
