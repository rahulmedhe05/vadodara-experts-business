import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Carbon monoxide detector in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional carbon monoxide detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/carbon-monoxide-detector-vadodara" },
  openGraph: {
    title: "Carbon monoxide detector in Vadodara | VadodaraExperts",
    description: "Professional carbon monoxide detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/carbon-monoxide-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carbon-monoxide-detector-vadodara" />;
}
