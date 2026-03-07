import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Bank guarantee customs in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional bank guarantee customs services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/bank-guarantee-customs-vadodara" },
  openGraph: {
    title: "Bank guarantee customs in Vadodara | VadodaraExperts",
    description: "Professional bank guarantee customs services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/bank-guarantee-customs-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bank-guarantee-customs-vadodara" />;
}
