import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "commercial interior contractor in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional commercial interior contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/commercial-interior-contractor-vadodara" },
  openGraph: {
    title: "commercial interior contractor in Vadodara | VadodaraExperts",
    description: "Professional commercial interior contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/commercial-interior-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-interior-contractor-vadodara" />;
}
