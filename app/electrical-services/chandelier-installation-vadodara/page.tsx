import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Chandelier installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional chandelier installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/chandelier-installation-vadodara" },
  openGraph: {
    title: "Chandelier installation in Vadodara | VadodaraExperts",
    description: "Professional chandelier installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/chandelier-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chandelier-installation-vadodara" />;
}
