import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire hydrant pump in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire hydrant pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-hydrant-pump-vadodara" },
  openGraph: {
    title: "fire hydrant pump in Vadodara | VadodaraExperts",
    description: "Professional fire hydrant pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-hydrant-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-hydrant-pump-vadodara" />;
}
