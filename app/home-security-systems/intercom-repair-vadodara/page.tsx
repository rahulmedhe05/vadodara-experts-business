import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Intercom repair in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional intercom repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/intercom-repair-vadodara" },
  openGraph: {
    title: "Intercom repair in Vadodara | VadodaraExperts",
    description: "Professional intercom repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/intercom-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intercom-repair-vadodara" />;
}
