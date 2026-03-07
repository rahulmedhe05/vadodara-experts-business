import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "aluminium facade for hotel in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional aluminium facade for hotel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/aluminium-facade-for-hotel-vadodara" },
  openGraph: {
    title: "aluminium facade for hotel in Vadodara | VadodaraExperts",
    description: "Professional aluminium facade for hotel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/aluminium-facade-for-hotel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-facade-for-hotel-vadodara" />;
}
