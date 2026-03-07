import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "healing garden hospital in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional healing garden hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/healing-garden-hospital-vadodara" },
  openGraph: {
    title: "healing garden hospital in Vadodara | VadodaraExperts",
    description: "Professional healing garden hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/healing-garden-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="healing-garden-hospital-vadodara" />;
}
