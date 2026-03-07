import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "commercial space planning in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional commercial space planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/commercial-space-planning-vadodara" },
  openGraph: {
    title: "commercial space planning in Vadodara | VadodaraExperts",
    description: "Professional commercial space planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/commercial-space-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-space-planning-vadodara" />;
}
