import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "hospital oxygen pipeline in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional hospital oxygen pipeline services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/hospital-oxygen-pipeline-vadodara" },
  openGraph: {
    title: "hospital oxygen pipeline in Vadodara | VadodaraExperts",
    description: "Professional hospital oxygen pipeline services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/hospital-oxygen-pipeline-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-oxygen-pipeline-vadodara" />;
}
