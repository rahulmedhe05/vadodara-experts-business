import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Machine made carpet cleaning in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional machine made carpet cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/machine-made-carpet-cleaning-vadodara" },
  openGraph: {
    title: "Machine made carpet cleaning in Vadodara | VadodaraExperts",
    description: "Professional machine made carpet cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/machine-made-carpet-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-made-carpet-cleaning-vadodara" />;
}
