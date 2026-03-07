import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "sustainable materials in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional sustainable materials services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/sustainable-materials-vadodara" },
  openGraph: {
    title: "sustainable materials in Vadodara | VadodaraExperts",
    description: "Professional sustainable materials services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/sustainable-materials-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sustainable-materials-vadodara" />;
}
