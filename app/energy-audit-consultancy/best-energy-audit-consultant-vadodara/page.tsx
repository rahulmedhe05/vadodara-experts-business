import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "best energy audit consultant in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional best energy audit consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/best-energy-audit-consultant-vadodara" },
  openGraph: {
    title: "best energy audit consultant in Vadodara | VadodaraExperts",
    description: "Professional best energy audit consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/best-energy-audit-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-energy-audit-consultant-vadodara" />;
}
