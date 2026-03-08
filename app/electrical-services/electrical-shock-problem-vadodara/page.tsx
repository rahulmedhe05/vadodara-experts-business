import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Electrical shock problem in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional electrical shock problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/electrical-shock-problem-vadodara" },
  openGraph: {
    title: "Electrical shock problem in Vadodara | VadodaraExperts",
    description: "Professional electrical shock problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/electrical-shock-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-shock-problem-vadodara" />;
}
