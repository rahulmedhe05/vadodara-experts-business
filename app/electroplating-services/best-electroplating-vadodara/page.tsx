import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "best electroplating in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional best electroplating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/best-electroplating-vadodara" },
  openGraph: {
    title: "best electroplating in Vadodara | VadodaraExperts",
    description: "Professional best electroplating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/best-electroplating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-electroplating-vadodara" />;
}
