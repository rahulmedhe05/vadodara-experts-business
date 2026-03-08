import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpet-cleaning-services")!;

export const metadata: Metadata = {
  title: "Church carpet cleaning in Vadodara | Carpet Cleaning Services | VadodaraExperts",
  description: "Professional church carpet cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpet-cleaning-services/church-carpet-cleaning-vadodara" },
  openGraph: {
    title: "Church carpet cleaning in Vadodara | VadodaraExperts",
    description: "Professional church carpet cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpet-cleaning-services/church-carpet-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="church-carpet-cleaning-vadodara" />;
}
