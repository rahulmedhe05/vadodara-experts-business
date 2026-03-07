import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "resort landscape design in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional resort landscape design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/resort-landscape-design-vadodara" },
  openGraph: {
    title: "resort landscape design in Vadodara | VadodaraExperts",
    description: "Professional resort landscape design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/resort-landscape-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resort-landscape-design-vadodara" />;
}
