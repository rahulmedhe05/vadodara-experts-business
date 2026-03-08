import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Siren alarm installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional siren alarm installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/siren-alarm-installation-vadodara" },
  openGraph: {
    title: "Siren alarm installation in Vadodara | VadodaraExperts",
    description: "Professional siren alarm installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/siren-alarm-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="siren-alarm-installation-vadodara" />;
}
