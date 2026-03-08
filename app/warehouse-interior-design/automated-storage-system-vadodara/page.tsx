import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "automated storage system in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional automated storage system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/automated-storage-system-vadodara" },
  openGraph: {
    title: "automated storage system in Vadodara | VadodaraExperts",
    description: "Professional automated storage system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/automated-storage-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-storage-system-vadodara" />;
}
