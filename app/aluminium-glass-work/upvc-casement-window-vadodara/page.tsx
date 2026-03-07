import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-glass-work")!;

export const metadata: Metadata = {
  title: "UPVC casement window in Vadodara | Aluminium & Glass Work | VadodaraExperts",
  description: "Professional upvc casement window services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-glass-work/upvc-casement-window-vadodara" },
  openGraph: {
    title: "UPVC casement window in Vadodara | VadodaraExperts",
    description: "Professional upvc casement window services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/aluminium-glass-work/upvc-casement-window-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upvc-casement-window-vadodara" />;
}
