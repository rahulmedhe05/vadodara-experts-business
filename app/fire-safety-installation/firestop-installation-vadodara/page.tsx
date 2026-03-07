import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "firestop installation in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional firestop installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/firestop-installation-vadodara" },
  openGraph: {
    title: "firestop installation in Vadodara | VadodaraExperts",
    description: "Professional firestop installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/firestop-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="firestop-installation-vadodara" />;
}
