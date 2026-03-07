import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Stamp duty calculation in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional stamp duty calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/stamp-duty-calculation-vadodara" },
  openGraph: {
    title: "Stamp duty calculation in Vadodara | VadodaraExperts",
    description: "Professional stamp duty calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/stamp-duty-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stamp-duty-calculation-vadodara" />;
}
