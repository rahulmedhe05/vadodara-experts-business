import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Old home renovation interior in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional old home renovation interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/old-home-renovation-interior-vadodara" },
  openGraph: {
    title: "Old home renovation interior in Vadodara | VadodaraExperts",
    description: "Professional old home renovation interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/old-home-renovation-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-home-renovation-interior-vadodara" />;
}
