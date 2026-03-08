import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Skirting installation in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional skirting installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/skirting-installation-vadodara" },
  openGraph: {
    title: "Skirting installation in Vadodara | VadodaraExperts",
    description: "Professional skirting installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/skirting-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skirting-installation-vadodara" />;
}
