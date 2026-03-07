import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Package AC unit service in Vadodara | AC Services | VadodaraExperts",
  description: "Professional package ac unit service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/package-ac-unit-service-vadodara" },
  openGraph: {
    title: "Package AC unit service in Vadodara | VadodaraExperts",
    description: "Professional package ac unit service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/package-ac-unit-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="package-ac-unit-service-vadodara" />;
}
