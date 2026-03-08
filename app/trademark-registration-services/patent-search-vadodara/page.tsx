import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Patent search in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional patent search services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/patent-search-vadodara" },
  openGraph: {
    title: "Patent search in Vadodara | VadodaraExperts",
    description: "Professional patent search services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/patent-search-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="patent-search-vadodara" />;
}
