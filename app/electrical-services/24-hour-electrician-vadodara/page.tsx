import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "24 hour electrician in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional 24 hour electrician services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/24-hour-electrician-vadodara" },
  openGraph: {
    title: "24 hour electrician in Vadodara | VadodaraExperts",
    description: "Professional 24 hour electrician services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/24-hour-electrician-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="24-hour-electrician-vadodara" />;
}
