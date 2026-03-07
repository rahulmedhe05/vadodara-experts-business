import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Central AC repair in Vadodara | AC Services | VadodaraExperts",
  description: "Professional central ac repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/central-ac-repair-vadodara" },
  openGraph: {
    title: "Central AC repair in Vadodara | VadodaraExperts",
    description: "Professional central ac repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/central-ac-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="central-ac-repair-vadodara" />;
}
