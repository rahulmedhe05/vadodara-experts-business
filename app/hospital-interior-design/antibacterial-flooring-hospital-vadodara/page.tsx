import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "antibacterial flooring hospital in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional antibacterial flooring hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/antibacterial-flooring-hospital-vadodara" },
  openGraph: {
    title: "antibacterial flooring hospital in Vadodara | VadodaraExperts",
    description: "Professional antibacterial flooring hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/antibacterial-flooring-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="antibacterial-flooring-hospital-vadodara" />;
}
