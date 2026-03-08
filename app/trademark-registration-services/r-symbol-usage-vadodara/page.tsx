import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "R symbol usage in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional r symbol usage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/r-symbol-usage-vadodara" },
  openGraph: {
    title: "R symbol usage in Vadodara | VadodaraExperts",
    description: "Professional r symbol usage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/r-symbol-usage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="r-symbol-usage-vadodara" />;
}
