import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Concurrent audit in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional concurrent audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/concurrent-audit-vadodara" },
  openGraph: {
    title: "Concurrent audit in Vadodara | VadodaraExperts",
    description: "Professional concurrent audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/concurrent-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concurrent-audit-vadodara" />;
}
