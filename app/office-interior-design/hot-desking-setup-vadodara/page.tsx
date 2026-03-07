import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "hot desking setup in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional hot desking setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/hot-desking-setup-vadodara" },
  openGraph: {
    title: "hot desking setup in Vadodara | VadodaraExperts",
    description: "Professional hot desking setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/hot-desking-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-desking-setup-vadodara" />;
}
