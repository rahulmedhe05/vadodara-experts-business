import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "spider glazing in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional spider glazing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/spider-glazing-vadodara" },
  openGraph: {
    title: "spider glazing in Vadodara | VadodaraExperts",
    description: "Professional spider glazing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/spider-glazing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spider-glazing-vadodara" />;
}
