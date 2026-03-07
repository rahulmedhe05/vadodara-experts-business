import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "ICU layout planning in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional icu layout planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/icu-layout-planning-vadodara" },
  openGraph: {
    title: "ICU layout planning in Vadodara | VadodaraExperts",
    description: "Professional icu layout planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/icu-layout-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="icu-layout-planning-vadodara" />;
}
