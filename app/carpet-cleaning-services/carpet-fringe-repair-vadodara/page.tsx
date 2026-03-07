import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Carpet fringe repair in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional carpet fringe repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-fringe-repair-vadodara" },
  openGraph: {
    title: "Carpet fringe repair in Vadodara | VadodaraExperts",
    description: "Professional carpet fringe repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-fringe-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carpet-fringe-repair-vadodara" />;
}
