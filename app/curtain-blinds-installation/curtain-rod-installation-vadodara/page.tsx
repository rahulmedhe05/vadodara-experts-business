import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Curtain rod installation in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional curtain rod installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/curtain-rod-installation-vadodara" },
  openGraph: {
    title: "Curtain rod installation in Vadodara | VadodaraExperts",
    description: "Professional curtain rod installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/curtain-rod-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="curtain-rod-installation-vadodara" />;
}
