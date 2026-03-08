import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating for decorative items in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating for decorative items services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-for-decorative-items-vadodara" },
  openGraph: {
    title: "plating for decorative items in Vadodara | VadodaraExperts",
    description: "Professional plating for decorative items services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-for-decorative-items-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-for-decorative-items-vadodara" />;
}
