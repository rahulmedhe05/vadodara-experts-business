import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "best aluminium facade contractor in Vadodara | Aluminium Facade Installation | VadodaraExperts",
  description: "Professional best aluminium facade contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation/best-aluminium-facade-contractor-vadodara" },
  openGraph: {
    title: "best aluminium facade contractor in Vadodara | VadodaraExperts",
    description: "Professional best aluminium facade contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation/best-aluminium-facade-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-aluminium-facade-contractor-vadodara" />;
}
