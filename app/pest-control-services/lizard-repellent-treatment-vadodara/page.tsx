import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Lizard repellent treatment in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional lizard repellent treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/lizard-repellent-treatment-vadodara" },
  openGraph: {
    title: "Lizard repellent treatment in Vadodara | VadodaraExperts",
    description: "Professional lizard repellent treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/lizard-repellent-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lizard-repellent-treatment-vadodara" />;
}
