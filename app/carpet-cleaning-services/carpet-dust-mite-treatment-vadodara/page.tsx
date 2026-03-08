import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Carpet dust mite treatment in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional carpet dust mite treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-dust-mite-treatment-vadodara" },
  openGraph: {
    title: "Carpet dust mite treatment in Vadodara | VadodaraExperts",
    description: "Professional carpet dust mite treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-dust-mite-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carpet-dust-mite-treatment-vadodara" />;
}
