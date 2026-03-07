import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "DG installation in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional dg installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/dg-installation-vadodara" },
  openGraph: {
    title: "DG installation in Vadodara | VadodaraExperts",
    description: "Professional dg installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/dg-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-installation-vadodara" />;
}
