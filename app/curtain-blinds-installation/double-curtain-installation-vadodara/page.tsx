import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Double curtain installation in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional double curtain installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/double-curtain-installation-vadodara" },
  openGraph: {
    title: "Double curtain installation in Vadodara | VadodaraExperts",
    description: "Professional double curtain installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/double-curtain-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="double-curtain-installation-vadodara" />;
}
