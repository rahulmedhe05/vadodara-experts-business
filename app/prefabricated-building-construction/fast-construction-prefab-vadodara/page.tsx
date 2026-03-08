import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "fast construction prefab in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional fast construction prefab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/fast-construction-prefab-vadodara" },
  openGraph: {
    title: "fast construction prefab in Vadodara | VadodaraExperts",
    description: "Professional fast construction prefab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/fast-construction-prefab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fast-construction-prefab-vadodara" />;
}
