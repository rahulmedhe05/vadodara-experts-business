import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Trademark watch service in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional trademark watch service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/trademark-watch-service-vadodara" },
  openGraph: {
    title: "Trademark watch service in Vadodara | VadodaraExperts",
    description: "Professional trademark watch service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/trademark-watch-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trademark-watch-service-vadodara" />;
}
