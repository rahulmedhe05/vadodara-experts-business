import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Commercial electrician in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional commercial electrician services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/commercial-electrician-vadodara" },
  openGraph: {
    title: "Commercial electrician in Vadodara | VadodaraExperts",
    description: "Professional commercial electrician services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/commercial-electrician-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-electrician-vadodara" />;
}
