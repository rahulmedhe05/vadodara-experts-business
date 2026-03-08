import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "sick building syndrome solution in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional sick building syndrome solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/sick-building-syndrome-solution-vadodara" },
  openGraph: {
    title: "sick building syndrome solution in Vadodara | VadodaraExperts",
    description: "Professional sick building syndrome solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/sick-building-syndrome-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sick-building-syndrome-solution-vadodara" />;
}
