import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Fire extinguisher installation in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional fire extinguisher installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/fire-extinguisher-installation-vadodara" },
  openGraph: {
    title: "Fire extinguisher installation in Vadodara | VadodaraExperts",
    description: "Professional fire extinguisher installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/fire-extinguisher-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-extinguisher-installation-vadodara" />;
}
