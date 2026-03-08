import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "demand side management in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional demand side management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/demand-side-management-vadodara" },
  openGraph: {
    title: "demand side management in Vadodara | VadodaraExperts",
    description: "Professional demand side management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/demand-side-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="demand-side-management-vadodara" />;
}
