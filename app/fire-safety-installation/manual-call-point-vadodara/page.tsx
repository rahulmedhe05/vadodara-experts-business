import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "manual call point in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional manual call point services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/manual-call-point-vadodara" },
  openGraph: {
    title: "manual call point in Vadodara | VadodaraExperts",
    description: "Professional manual call point services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/manual-call-point-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manual-call-point-vadodara" />;
}
