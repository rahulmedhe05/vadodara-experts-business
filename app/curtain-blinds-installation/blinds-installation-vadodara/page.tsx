import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Blinds installation in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional blinds installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/blinds-installation-vadodara" },
  openGraph: {
    title: "Blinds installation in Vadodara | VadodaraExperts",
    description: "Professional blinds installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/blinds-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blinds-installation-vadodara" />;
}
