import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Custom wedding album in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional custom wedding album services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/custom-wedding-album-vadodara" },
  openGraph: {
    title: "Custom wedding album in Vadodara | VadodaraExperts",
    description: "Professional custom wedding album services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/custom-wedding-album-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-wedding-album-vadodara" />;
}
