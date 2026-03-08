import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "PT services in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional pt services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/pt-services-vadodara" },
  openGraph: {
    title: "PT services in Vadodara | VadodaraExperts",
    description: "Professional pt services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/pt-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pt-services-vadodara" />;
}
