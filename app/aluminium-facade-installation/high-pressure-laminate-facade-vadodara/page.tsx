import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "high pressure laminate facade in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional high pressure laminate facade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/high-pressure-laminate-facade-vadodara" },
  openGraph: {
    title: "high pressure laminate facade in Vadodara | VadodaraExperts",
    description: "Professional high pressure laminate facade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/high-pressure-laminate-facade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-pressure-laminate-facade-vadodara" />;
}
