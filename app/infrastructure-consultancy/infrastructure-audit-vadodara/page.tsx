import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "infrastructure audit in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional infrastructure audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-audit-vadodara" },
  openGraph: {
    title: "infrastructure audit in Vadodara | VadodaraExperts",
    description: "Professional infrastructure audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infrastructure-audit-vadodara" />;
}
