import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Float switch installation in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional float switch installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/float-switch-installation-vadodara" },
  openGraph: {
    title: "Float switch installation in Vadodara | VadodaraExperts",
    description: "Professional float switch installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/float-switch-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="float-switch-installation-vadodara" />;
}
