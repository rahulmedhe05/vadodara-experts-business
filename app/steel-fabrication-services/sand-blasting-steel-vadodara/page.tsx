import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "sand blasting steel in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional sand blasting steel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/sand-blasting-steel-vadodara" },
  openGraph: {
    title: "sand blasting steel in Vadodara | VadodaraExperts",
    description: "Professional sand blasting steel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/sand-blasting-steel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sand-blasting-steel-vadodara" />;
}
