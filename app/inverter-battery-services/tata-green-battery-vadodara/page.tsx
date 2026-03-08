import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Tata Green battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional tata green battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/tata-green-battery-vadodara" },
  openGraph: {
    title: "Tata Green battery in Vadodara | VadodaraExperts",
    description: "Professional tata green battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/tata-green-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tata-green-battery-vadodara" />;
}
