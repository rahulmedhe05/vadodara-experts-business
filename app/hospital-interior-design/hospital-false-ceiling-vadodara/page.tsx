import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "hospital false ceiling in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional hospital false ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/hospital-false-ceiling-vadodara" },
  openGraph: {
    title: "hospital false ceiling in Vadodara | VadodaraExperts",
    description: "Professional hospital false ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/hospital-false-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-false-ceiling-vadodara" />;
}
