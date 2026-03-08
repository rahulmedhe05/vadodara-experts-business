import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "net zero energy building in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional net zero energy building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/net-zero-energy-building-vadodara" },
  openGraph: {
    title: "net zero energy building in Vadodara | VadodaraExperts",
    description: "Professional net zero energy building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/net-zero-energy-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="net-zero-energy-building-vadodara" />;
}
