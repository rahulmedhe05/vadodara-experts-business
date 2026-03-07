import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Laundry setup consultation in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional laundry setup consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/laundry-setup-consultation-vadodara" },
  openGraph: {
    title: "Laundry setup consultation in Vadodara | VadodaraExperts",
    description: "Professional laundry setup consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/laundry-setup-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laundry-setup-consultation-vadodara" />;
}
