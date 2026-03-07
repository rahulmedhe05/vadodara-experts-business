import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "stadium design in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional stadium design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/stadium-design-vadodara" },
  openGraph: {
    title: "stadium design in Vadodara | VadodaraExperts",
    description: "Professional stadium design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/stadium-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stadium-design-vadodara" />;
}
