import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "disaster relief shelter in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional disaster relief shelter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/disaster-relief-shelter-vadodara" },
  openGraph: {
    title: "disaster relief shelter in Vadodara | VadodaraExperts",
    description: "Professional disaster relief shelter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/disaster-relief-shelter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="disaster-relief-shelter-vadodara" />;
}
