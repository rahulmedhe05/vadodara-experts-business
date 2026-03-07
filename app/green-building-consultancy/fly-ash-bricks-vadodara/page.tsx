import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "fly ash bricks in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional fly ash bricks services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/fly-ash-bricks-vadodara" },
  openGraph: {
    title: "fly ash bricks in Vadodara | VadodaraExperts",
    description: "Professional fly ash bricks services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/fly-ash-bricks-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fly-ash-bricks-vadodara" />;
}
