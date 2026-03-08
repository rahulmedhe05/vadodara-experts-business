import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "BEE certified energy auditor in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional bee certified energy auditor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/bee-certified-energy-auditor-vadodara" },
  openGraph: {
    title: "BEE certified energy auditor in Vadodara | VadodaraExperts",
    description: "Professional bee certified energy auditor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/bee-certified-energy-auditor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bee-certified-energy-auditor-vadodara" />;
}
