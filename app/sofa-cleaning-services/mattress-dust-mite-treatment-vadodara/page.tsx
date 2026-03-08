import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Mattress dust mite treatment in Vadodara | Sofa Cleaning Services | VadodaraExperts",
  description: "Professional mattress dust mite treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services/mattress-dust-mite-treatment-vadodara" },
  openGraph: {
    title: "Mattress dust mite treatment in Vadodara | VadodaraExperts",
    description: "Professional mattress dust mite treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services/mattress-dust-mite-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mattress-dust-mite-treatment-vadodara" />;
}
