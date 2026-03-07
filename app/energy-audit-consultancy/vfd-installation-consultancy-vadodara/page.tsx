import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "VFD installation consultancy in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional vfd installation consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/vfd-installation-consultancy-vadodara" },
  openGraph: {
    title: "VFD installation consultancy in Vadodara | VadodaraExperts",
    description: "Professional vfd installation consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/vfd-installation-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vfd-installation-consultancy-vadodara" />;
}
