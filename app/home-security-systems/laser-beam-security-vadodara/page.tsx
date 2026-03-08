import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Laser beam security in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional laser beam security services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/laser-beam-security-vadodara" },
  openGraph: {
    title: "Laser beam security in Vadodara | VadodaraExperts",
    description: "Professional laser beam security services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/laser-beam-security-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-beam-security-vadodara" />;
}
