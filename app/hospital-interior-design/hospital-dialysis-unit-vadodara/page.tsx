import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "hospital dialysis unit in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional hospital dialysis unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/hospital-dialysis-unit-vadodara" },
  openGraph: {
    title: "hospital dialysis unit in Vadodara | VadodaraExperts",
    description: "Professional hospital dialysis unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/hospital-dialysis-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-dialysis-unit-vadodara" />;
}
