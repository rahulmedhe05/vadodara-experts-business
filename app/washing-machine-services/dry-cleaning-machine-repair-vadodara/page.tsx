import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Dry cleaning machine repair in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional dry cleaning machine repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/dry-cleaning-machine-repair-vadodara" },
  openGraph: {
    title: "Dry cleaning machine repair in Vadodara | VadodaraExperts",
    description: "Professional dry cleaning machine repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/dry-cleaning-machine-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-cleaning-machine-repair-vadodara" />;
}
