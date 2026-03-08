import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "road design consultant in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional road design consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/road-design-consultant-vadodara" },
  openGraph: {
    title: "road design consultant in Vadodara | VadodaraExperts",
    description: "Professional road design consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/road-design-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="road-design-consultant-vadodara" />;
}
