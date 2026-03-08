import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Glass in woodwork in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional glass in woodwork services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/glass-in-woodwork-vadodara" },
  openGraph: {
    title: "Glass in woodwork in Vadodara | VadodaraExperts",
    description: "Professional glass in woodwork services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/glass-in-woodwork-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-in-woodwork-vadodara" />;
}
