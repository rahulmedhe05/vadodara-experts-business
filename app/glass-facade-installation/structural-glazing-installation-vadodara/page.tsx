import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "structural glazing installation in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional structural glazing installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/structural-glazing-installation-vadodara" },
  openGraph: {
    title: "structural glazing installation in Vadodara | VadodaraExperts",
    description: "Professional structural glazing installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/structural-glazing-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-glazing-installation-vadodara" />;
}
