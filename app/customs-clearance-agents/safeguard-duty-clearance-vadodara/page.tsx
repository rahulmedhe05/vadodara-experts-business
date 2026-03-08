import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Safeguard duty clearance in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional safeguard duty clearance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/safeguard-duty-clearance-vadodara" },
  openGraph: {
    title: "Safeguard duty clearance in Vadodara | VadodaraExperts",
    description: "Professional safeguard duty clearance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/safeguard-duty-clearance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safeguard-duty-clearance-vadodara" />;
}
