import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "ergonomic chair in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional ergonomic chair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/ergonomic-chair-vadodara" },
  openGraph: {
    title: "ergonomic chair in Vadodara | VadodaraExperts",
    description: "Professional ergonomic chair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/ergonomic-chair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ergonomic-chair-vadodara" />;
}
