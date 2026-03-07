import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "best glass facade contractor in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional best glass facade contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/best-glass-facade-contractor-vadodara" },
  openGraph: {
    title: "best glass facade contractor in Vadodara | VadodaraExperts",
    description: "Professional best glass facade contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/best-glass-facade-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-glass-facade-contractor-vadodara" />;
}
