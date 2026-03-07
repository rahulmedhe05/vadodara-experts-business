import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "air handling unit in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional air handling unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/air-handling-unit-vadodara" },
  openGraph: {
    title: "air handling unit in Vadodara | VadodaraExperts",
    description: "Professional air handling unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/air-handling-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-handling-unit-vadodara" />;
}
