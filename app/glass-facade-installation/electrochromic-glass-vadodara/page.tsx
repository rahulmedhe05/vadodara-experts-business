import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "electrochromic glass in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional electrochromic glass services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/electrochromic-glass-vadodara" },
  openGraph: {
    title: "electrochromic glass in Vadodara | VadodaraExperts",
    description: "Professional electrochromic glass services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/electrochromic-glass-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrochromic-glass-vadodara" />;
}
