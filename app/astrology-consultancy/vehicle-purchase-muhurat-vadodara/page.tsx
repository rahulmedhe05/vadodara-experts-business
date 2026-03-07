import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "vehicle purchase muhurat in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional vehicle purchase muhurat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/vehicle-purchase-muhurat-vadodara" },
  openGraph: {
    title: "vehicle purchase muhurat in Vadodara | VadodaraExperts",
    description: "Professional vehicle purchase muhurat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/vehicle-purchase-muhurat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vehicle-purchase-muhurat-vadodara" />;
}
