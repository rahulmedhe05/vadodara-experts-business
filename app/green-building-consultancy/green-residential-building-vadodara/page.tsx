import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "green residential building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional green residential building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/green-residential-building-vadodara" },
  openGraph: {
    title: "green residential building in Vadodara | VadodaraExperts",
    description: "Professional green residential building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/green-residential-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-residential-building-vadodara" />;
}
