import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Card access system in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional card access system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/card-access-system-vadodara" },
  openGraph: {
    title: "Card access system in Vadodara | VadodaraExperts",
    description: "Professional card access system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/card-access-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="card-access-system-vadodara" />;
}
