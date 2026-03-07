import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Garden lighting installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional garden lighting installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/garden-lighting-installation-vadodara" },
  openGraph: {
    title: "Garden lighting installation in Vadodara | VadodaraExperts",
    description: "Professional garden lighting installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/garden-lighting-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garden-lighting-installation-vadodara" />;
}
