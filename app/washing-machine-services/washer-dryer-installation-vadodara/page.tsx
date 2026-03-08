import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Washer dryer installation in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional washer dryer installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/washer-dryer-installation-vadodara" },
  openGraph: {
    title: "Washer dryer installation in Vadodara | VadodaraExperts",
    description: "Professional washer dryer installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/washer-dryer-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="washer-dryer-installation-vadodara" />;
}
