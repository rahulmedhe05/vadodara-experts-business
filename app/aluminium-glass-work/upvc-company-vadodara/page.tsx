import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "UPVC company in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional upvc company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/upvc-company-vadodara" },
  openGraph: {
    title: "UPVC company in Vadodara | VadodaraExperts",
    description: "Professional upvc company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/upvc-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upvc-company-vadodara" />;
}
