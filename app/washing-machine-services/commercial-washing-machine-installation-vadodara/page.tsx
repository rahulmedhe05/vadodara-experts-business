import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Commercial washing machine installation in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional commercial washing machine installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/commercial-washing-machine-installation-vadodara" },
  openGraph: {
    title: "Commercial washing machine installation in Vadodara | VadodaraExperts",
    description: "Professional commercial washing machine installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/commercial-washing-machine-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-washing-machine-installation-vadodara" />;
}
