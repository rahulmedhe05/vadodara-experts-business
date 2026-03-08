import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Birthday photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional birthday photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/birthday-photography-vadodara" },
  openGraph: {
    title: "Birthday photography in Vadodara | VadodaraExperts",
    description: "Professional birthday photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/birthday-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="birthday-photography-vadodara" />;
}
