import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Double curtain rod in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional double curtain rod services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/double-curtain-rod-vadodara" },
  openGraph: {
    title: "Double curtain rod in Vadodara | VadodaraExperts",
    description: "Professional double curtain rod services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/double-curtain-rod-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="double-curtain-rod-vadodara" />;
}
