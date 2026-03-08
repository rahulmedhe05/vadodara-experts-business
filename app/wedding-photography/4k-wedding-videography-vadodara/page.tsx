import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "4K wedding videography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional 4k wedding videography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/4k-wedding-videography-vadodara" },
  openGraph: {
    title: "4K wedding videography in Vadodara | VadodaraExperts",
    description: "Professional 4k wedding videography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/4k-wedding-videography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="4k-wedding-videography-vadodara" />;
}
