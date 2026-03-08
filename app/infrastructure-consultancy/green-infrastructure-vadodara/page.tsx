import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "green infrastructure in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional green infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/green-infrastructure-vadodara" },
  openGraph: {
    title: "green infrastructure in Vadodara | VadodaraExperts",
    description: "Professional green infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/green-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-infrastructure-vadodara" />;
}
