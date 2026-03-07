import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "chiller replacement study in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional chiller replacement study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/chiller-replacement-study-vadodara" },
  openGraph: {
    title: "chiller replacement study in Vadodara | VadodaraExperts",
    description: "Professional chiller replacement study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/chiller-replacement-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chiller-replacement-study-vadodara" />;
}
