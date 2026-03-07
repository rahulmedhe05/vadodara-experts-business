import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "gypsum partition office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional gypsum partition office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/gypsum-partition-office-vadodara" },
  openGraph: {
    title: "gypsum partition office in Vadodara | VadodaraExperts",
    description: "Professional gypsum partition office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/gypsum-partition-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gypsum-partition-office-vadodara" />;
}
