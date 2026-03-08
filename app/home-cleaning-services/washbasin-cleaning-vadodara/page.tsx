import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Washbasin cleaning in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional washbasin cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/washbasin-cleaning-vadodara" },
  openGraph: {
    title: "Washbasin cleaning in Vadodara | VadodaraExperts",
    description: "Professional washbasin cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/washbasin-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="washbasin-cleaning-vadodara" />;
}
