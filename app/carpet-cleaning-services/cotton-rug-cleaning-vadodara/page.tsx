import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Cotton rug cleaning in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional cotton rug cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/cotton-rug-cleaning-vadodara" },
  openGraph: {
    title: "Cotton rug cleaning in Vadodara | VadodaraExperts",
    description: "Professional cotton rug cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/cotton-rug-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cotton-rug-cleaning-vadodara" />;
}
