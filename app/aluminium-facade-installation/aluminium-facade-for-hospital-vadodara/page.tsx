import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "aluminium facade for hospital in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional aluminium facade for hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/aluminium-facade-for-hospital-vadodara" },
  openGraph: {
    title: "aluminium facade for hospital in Vadodara | VadodaraExperts",
    description: "Professional aluminium facade for hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/aluminium-facade-for-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-facade-for-hospital-vadodara" />;
}
