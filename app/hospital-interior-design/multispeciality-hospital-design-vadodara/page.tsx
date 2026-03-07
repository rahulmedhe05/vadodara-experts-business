import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "multispeciality hospital design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional multispeciality hospital design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/multispeciality-hospital-design-vadodara" },
  openGraph: {
    title: "multispeciality hospital design in Vadodara | VadodaraExperts",
    description: "Professional multispeciality hospital design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/multispeciality-hospital-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multispeciality-hospital-design-vadodara" />;
}
