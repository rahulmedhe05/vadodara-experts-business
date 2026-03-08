import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Plaster repair in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional plaster repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/plaster-repair-vadodara" },
  openGraph: {
    title: "Plaster repair in Vadodara | VadodaraExperts",
    description: "Professional plaster repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/plaster-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plaster-repair-vadodara" />;
}
