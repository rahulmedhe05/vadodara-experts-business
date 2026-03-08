import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Termite baiting system in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional termite baiting system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/termite-baiting-system-vadodara" },
  openGraph: {
    title: "Termite baiting system in Vadodara | VadodaraExperts",
    description: "Professional termite baiting system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/termite-baiting-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="termite-baiting-system-vadodara" />;
}
