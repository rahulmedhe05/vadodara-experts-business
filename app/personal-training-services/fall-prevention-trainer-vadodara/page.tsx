import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Fall prevention trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional fall prevention trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/fall-prevention-trainer-vadodara" },
  openGraph: {
    title: "Fall prevention trainer in Vadodara | VadodaraExperts",
    description: "Professional fall prevention trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/fall-prevention-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fall-prevention-trainer-vadodara" />;
}
