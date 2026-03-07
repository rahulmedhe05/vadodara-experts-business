import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Godrej washing machine service in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional godrej washing machine service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/godrej-washing-machine-service-vadodara" },
  openGraph: {
    title: "Godrej washing machine service in Vadodara | VadodaraExperts",
    description: "Professional godrej washing machine service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/godrej-washing-machine-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="godrej-washing-machine-service-vadodara" />;
}
