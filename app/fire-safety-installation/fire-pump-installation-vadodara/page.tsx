import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire pump installation in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-pump-installation-vadodara" },
  openGraph: {
    title: "fire pump installation in Vadodara | VadodaraExperts",
    description: "Professional fire pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-pump-installation-vadodara" />;
}
