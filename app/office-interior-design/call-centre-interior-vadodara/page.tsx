import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "call centre interior in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional call centre interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/call-centre-interior-vadodara" },
  openGraph: {
    title: "call centre interior in Vadodara | VadodaraExperts",
    description: "Professional call centre interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/call-centre-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="call-centre-interior-vadodara" />;
}
