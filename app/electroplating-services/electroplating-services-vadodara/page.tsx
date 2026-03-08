import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "electroplating services in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional electroplating services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/electroplating-services-vadodara" },
  openGraph: {
    title: "electroplating services in Vadodara | VadodaraExperts",
    description: "Professional electroplating services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/electroplating-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electroplating-services-vadodara" />;
}
