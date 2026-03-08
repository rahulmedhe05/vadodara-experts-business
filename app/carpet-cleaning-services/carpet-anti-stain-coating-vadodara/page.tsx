import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Carpet anti stain coating in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional carpet anti stain coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-anti-stain-coating-vadodara" },
  openGraph: {
    title: "Carpet anti stain coating in Vadodara | VadodaraExperts",
    description: "Professional carpet anti stain coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/carpet-anti-stain-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carpet-anti-stain-coating-vadodara" />;
}
