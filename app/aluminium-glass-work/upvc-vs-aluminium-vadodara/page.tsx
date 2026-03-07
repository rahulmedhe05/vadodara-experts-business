import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "UPVC vs aluminium in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional upvc vs aluminium services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/upvc-vs-aluminium-vadodara" },
  openGraph: {
    title: "UPVC vs aluminium in Vadodara | VadodaraExperts",
    description: "Professional upvc vs aluminium services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/upvc-vs-aluminium-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upvc-vs-aluminium-vadodara" />;
}
