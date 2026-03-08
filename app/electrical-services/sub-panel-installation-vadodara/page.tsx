import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Sub panel installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional sub panel installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/sub-panel-installation-vadodara" },
  openGraph: {
    title: "Sub panel installation in Vadodara | VadodaraExperts",
    description: "Professional sub panel installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/sub-panel-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-panel-installation-vadodara" />;
}
