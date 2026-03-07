import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "busbar trunking system in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional busbar trunking system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/busbar-trunking-system-vadodara" },
  openGraph: {
    title: "busbar trunking system in Vadodara | VadodaraExperts",
    description: "Professional busbar trunking system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/busbar-trunking-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="busbar-trunking-system-vadodara" />;
}
