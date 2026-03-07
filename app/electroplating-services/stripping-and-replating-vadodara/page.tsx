import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "stripping and replating in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional stripping and replating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/stripping-and-replating-vadodara" },
  openGraph: {
    title: "stripping and replating in Vadodara | VadodaraExperts",
    description: "Professional stripping and replating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/stripping-and-replating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stripping-and-replating-vadodara" />;
}
