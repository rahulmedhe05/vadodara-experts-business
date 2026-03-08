import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "industrial unit for lease in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional industrial unit for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/industrial-unit-for-lease-vadodara" },
  openGraph: {
    title: "industrial unit for lease in Vadodara | VadodaraExperts",
    description: "Professional industrial unit for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/industrial-unit-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-unit-for-lease-vadodara" />;
}
