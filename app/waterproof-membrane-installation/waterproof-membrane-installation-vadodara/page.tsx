import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproof-membrane-installation")!;

export const metadata: Metadata = {
  title: "waterproof membrane installation in Vadodara | Waterproof Membrane Installation | VadodaraExperts",
  description: "Professional waterproof membrane installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproof-membrane-installation/waterproof-membrane-installation-vadodara" },
  openGraph: {
    title: "waterproof membrane installation in Vadodara | VadodaraExperts",
    description: "Professional waterproof membrane installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproof-membrane-installation/waterproof-membrane-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waterproof-membrane-installation-vadodara" />;
}
