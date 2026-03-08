import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "finished goods storage in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional finished goods storage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/finished-goods-storage-vadodara" },
  openGraph: {
    title: "finished goods storage in Vadodara | VadodaraExperts",
    description: "Professional finished goods storage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/finished-goods-storage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="finished-goods-storage-vadodara" />;
}
