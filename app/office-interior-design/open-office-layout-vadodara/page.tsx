import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "open office layout in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional open office layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/open-office-layout-vadodara" },
  openGraph: {
    title: "open office layout in Vadodara | VadodaraExperts",
    description: "Professional open office layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/open-office-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-office-layout-vadodara" />;
}
