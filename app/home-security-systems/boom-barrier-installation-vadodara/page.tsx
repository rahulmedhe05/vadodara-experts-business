import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Boom barrier installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional boom barrier installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/boom-barrier-installation-vadodara" },
  openGraph: {
    title: "Boom barrier installation in Vadodara | VadodaraExperts",
    description: "Professional boom barrier installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/boom-barrier-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boom-barrier-installation-vadodara" />;
}
