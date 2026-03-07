import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Second check in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional second check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/second-check-vadodara" },
  openGraph: {
    title: "Second check in Vadodara | VadodaraExperts",
    description: "Professional second check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/second-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-check-vadodara" />;
}
