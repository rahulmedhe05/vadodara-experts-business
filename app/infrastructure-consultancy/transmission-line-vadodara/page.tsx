import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "transmission line in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional transmission line services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/transmission-line-vadodara" },
  openGraph: {
    title: "transmission line in Vadodara | VadodaraExperts",
    description: "Professional transmission line services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/transmission-line-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transmission-line-vadodara" />;
}
