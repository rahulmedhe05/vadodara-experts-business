import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "insulated glass unit in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional insulated glass unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/insulated-glass-unit-vadodara" },
  openGraph: {
    title: "insulated glass unit in Vadodara | VadodaraExperts",
    description: "Professional insulated glass unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/insulated-glass-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulated-glass-unit-vadodara" />;
}
