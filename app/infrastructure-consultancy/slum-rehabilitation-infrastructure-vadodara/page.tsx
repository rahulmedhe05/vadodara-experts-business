import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "slum rehabilitation infrastructure in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional slum rehabilitation infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/slum-rehabilitation-infrastructure-vadodara" },
  openGraph: {
    title: "slum rehabilitation infrastructure in Vadodara | VadodaraExperts",
    description: "Professional slum rehabilitation infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/slum-rehabilitation-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slum-rehabilitation-infrastructure-vadodara" />;
}
