import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "One on one training in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional one on one training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/one-on-one-training-vadodara" },
  openGraph: {
    title: "One on one training in Vadodara | VadodaraExperts",
    description: "Professional one on one training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/one-on-one-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="one-on-one-training-vadodara" />;
}
