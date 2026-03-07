import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Gas leak detector installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional gas leak detector installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/gas-leak-detector-installation-vadodara" },
  openGraph: {
    title: "Gas leak detector installation in Vadodara | VadodaraExperts",
    description: "Professional gas leak detector installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/gas-leak-detector-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-leak-detector-installation-vadodara" />;
}
