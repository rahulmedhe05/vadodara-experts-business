import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Flush door installation in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional flush door installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/flush-door-installation-vadodara" },
  openGraph: {
    title: "Flush door installation in Vadodara | VadodaraExperts",
    description: "Professional flush door installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/flush-door-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flush-door-installation-vadodara" />;
}
