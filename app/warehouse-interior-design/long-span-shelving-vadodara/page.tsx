import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "long span shelving in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional long span shelving services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/long-span-shelving-vadodara" },
  openGraph: {
    title: "long span shelving in Vadodara | VadodaraExperts",
    description: "Professional long span shelving services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/long-span-shelving-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="long-span-shelving-vadodara" />;
}
