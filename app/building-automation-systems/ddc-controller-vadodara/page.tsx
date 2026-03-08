import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "DDC controller in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional ddc controller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/ddc-controller-vadodara" },
  openGraph: {
    title: "DDC controller in Vadodara | VadodaraExperts",
    description: "Professional ddc controller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/ddc-controller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ddc-controller-vadodara" />;
}
