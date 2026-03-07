import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Post tensioning retrofit in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional post tensioning retrofit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/post-tensioning-retrofit-vadodara" },
  openGraph: {
    title: "Post tensioning retrofit in Vadodara | VadodaraExperts",
    description: "Professional post tensioning retrofit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/post-tensioning-retrofit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-tensioning-retrofit-vadodara" />;
}
