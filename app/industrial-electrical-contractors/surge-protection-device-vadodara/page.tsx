import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "surge protection device in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional surge protection device services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/surge-protection-device-vadodara" },
  openGraph: {
    title: "surge protection device in Vadodara | VadodaraExperts",
    description: "Professional surge protection device services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/surge-protection-device-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surge-protection-device-vadodara" />;
}
